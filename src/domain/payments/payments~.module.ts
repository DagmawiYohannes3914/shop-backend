import { Module } from '@nestjs/common';
import { Payments~Service } from './payments~.service';
import { Payments~Controller } from './payments~.controller';

@Module({
  controllers: [Payments~Controller],
  providers: [Payments~Service],
})
export class Payments~Module {}
