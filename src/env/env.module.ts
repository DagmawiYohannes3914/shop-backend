import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_VALIDATION_SCHEMA } from './util/env.constants'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule globally available
      expandVariables: true, // Enable variable expansion
      validationSchema: ENV_VALIDATION_SCHEMA, // Set the validation schema
    }),
  ],
})
export class EnvModule {}
