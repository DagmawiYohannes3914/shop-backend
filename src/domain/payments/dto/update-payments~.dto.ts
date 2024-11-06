import { PartialType } from '@nestjs/mapped-types';
import { CreatePayments~Dto } from './create-payments~.dto';

export class UpdatePayments~Dto extends PartialType(CreatePayments~Dto) {}
