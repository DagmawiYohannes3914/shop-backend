import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedingModule } from './seeding/seeding.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forFeature(databaseConfig), // Partial registration
    TypeOrmModule.forRootAsync(databaseConfig.asProvider()), SeedingModule, // Simplified setup
  ],
})
export class DatabaseModule {}
