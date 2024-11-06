import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Payments~Service } from './payments~.service';
import { CreatePayments~Dto } from './dto/create-payments~.dto';
import { UpdatePayments~Dto } from './dto/update-payments~.dto';

@Controller('payments~')
export class Payments~Controller {
  constructor(private readonly payments~Service: Payments~Service) {}

  @Post()
  create(@Body() createPayments~Dto: CreatePayments~Dto) {
    return this.payments~Service.create(createPayments~Dto);
  }

  @Get()
  findAll() {
    return this.payments~Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payments~Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayments~Dto: UpdatePayments~Dto) {
    return this.payments~Service.update(+id, updatePayments~Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payments~Service.remove(+id);
  }
}
