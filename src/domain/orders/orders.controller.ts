import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { PaginationDto } from 'common/dto/pagination.dto';
import { IdDto } from 'common/dto/id.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.ordersService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param() {id}: IdDto) {
    return this.ordersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param() { id }: IdDto) {
    return this.ordersService.remove(id);
  }
}
