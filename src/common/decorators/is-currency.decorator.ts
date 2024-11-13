import { applyDecorators } from '@nestjs/common';
import { IsInt, IsPositive, ValidationOptions } from 'class-validator';

/**
 * Checks if the value is a positive number greater than zero with at most two decimal places.
 */

export const IsCurrency = (
  validationOption?: ValidationOptions,
): PropertyDecorator => applyDecorators(IsInt(validationOption), IsPositive(validationOption));