// common/util/common.constants.ts
import { ValidationPipeOptions } from '@nestjs/common';

export const VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
};

export const Default_Page_Size = {
  USER: 10,
  ORDER: 5,
  CATEGORY: 30,
  PRODUCT: 20,
} as const satisfies Record<string, number>;


