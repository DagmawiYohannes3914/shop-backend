import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      autoLoadEntities: true,
    }),
    // Other modules here
  ],
  // controllers and providers here
})
export class DatabaseModule {}

