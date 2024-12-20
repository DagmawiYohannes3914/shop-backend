import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { VALIDATION_PIPE_OPTIONS } from './common/util/common.constants';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe(VALIDATION_PIPE_OPTIONS));
  app.enableCors();
  app.use(helmet());


  await app.listen(process.env.PORT ?? 3000);
} 
bootstrap();
