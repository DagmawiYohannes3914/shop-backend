import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PaginationDto } from 'common/dto/pagination.dto';

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
    const { page = 1, limit = 5 } = paginationDto;
    return this.ordersRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
