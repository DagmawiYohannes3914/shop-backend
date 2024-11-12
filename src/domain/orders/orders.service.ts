import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PaginationDto } from 'common/dto/pagination.dto';
import { Default_Page_Size } from 'common/util/common.constants';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ){}

 create(createOrderDto: CreateOrderDto) {
    // const {items} = createOrderDto;
    const order = this.ordersRepository.create({
      ...createOrderDto,
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
        customer: true,
      },
    });
    if (!order) {
      throw new NotFoundException('Order not found ');
    }
    return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.ordersRepository.remove(user);
  }
}
