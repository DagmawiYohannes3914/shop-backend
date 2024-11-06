import { Module } from '@nestjs/common';
import { UsersModule } from './domain/users/users.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { OrdersModule } from './domain/orders/orders.module';
import { Payments~Module } from './domain/payments~/payments~.module';
import { PaymentsModule } from './domain/payments/payments.module';

@Module({
  imports: [UsersModule, CommonModule, DatabaseModule, EnvModule, OrdersModule, Payments~Module, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
