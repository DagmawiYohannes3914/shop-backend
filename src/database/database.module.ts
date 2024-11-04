import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forFeature(databaseConfig), // Partial registration
    TypeOrmModule.forRootAsync(databaseConfig.asProvider()), // Simplified setup
  ],
})
export class DatabaseModule {}
