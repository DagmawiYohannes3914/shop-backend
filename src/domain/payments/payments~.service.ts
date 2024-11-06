import { Injectable } from '@nestjs/common';
import { CreatePayments~Dto } from './dto/create-payments~.dto';
import { UpdatePayments~Dto } from './dto/update-payments~.dto';

@Injectable()
export class Payments~Service {
  create(createPayments~Dto: CreatePayments~Dto) {
    return 'This action adds a new payments~';
  }

  findAll() {
    return `This action returns all payments~`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payments~`;
  }

  update(id: number, updatePayments~Dto: UpdatePayments~Dto) {
    return `This action updates a #${id} payments~`;
  }

  remove(id: number) {
    return `This action removes a #${id} payments~`;
  }
}
