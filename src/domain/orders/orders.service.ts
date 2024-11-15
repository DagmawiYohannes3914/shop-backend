import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { PaginationDto } from 'common/dto/pagination.dto';
import { Default_Page_Size } from 'common/util/common.constants';
import { Product } from 'products/entities/product.entity';
import { OrderItem } from './entities/order-item.entity';
import { OrderItemDto } from './dto/order-item.dto';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly ordersItemRepository: Repository<OrderItem>,
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ){}
  

 async create(createOrderDto: CreateOrderDto) {

  const { items } = createOrderDto;
  const itemsWithPrice = await Promise.all(
    items.map(item => this.createOrderItemWithPrice(item)),
  ) 

    const order = this.ordersRepository.create({
      ...createOrderDto,
      items: itemsWithPrice,
    });

    return this.ordersRepository.save(order);

    
  }
 
  findAll(paginationDto: PaginationDto) {
    const {limit, offset } = paginationDto;
    return this.ordersRepository.find({
      skip: offset,
      take: limit ?? Default_Page_Size.ORDER,
    });
  }

  async findOne(id: number) {
    const order = await this.ordersRepository.findOne({
      where: { id },
      relations: {
        items: {
          product: true,
        },
        customer: true,
        payment: true,
      },
    });
    if (!order) {
      throw new NotFoundException('Order not found ');
    }
    return order;
  }


  async remove(id: number) {
    const user = await this.findOne(id);
    return this.ordersRepository.remove(user);
  }

  private async createOrderItemWithPrice(orderItemDto: OrderItemDto){
    const { id } = orderItemDto.product;

    const product = await this.productsRepository.findOneBy({id});

    const { price } = product;

    const orderItem = this.ordersItemRepository.create({
      ...orderItemDto,
      price,
    });

    return orderItem;

  }
  
}
