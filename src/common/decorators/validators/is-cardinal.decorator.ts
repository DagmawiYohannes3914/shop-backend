import { applyDecorators } from '@nestjs/common';
import { IsInt, IsPositive, ValidationOptions } from 'class-validator';

/**
 * Checks if the value is a positive integer greater than zero.
 */

export const IsCardinal = (
  validationOption?: ValidationOptions,
): PropertyDecorator => applyDecorators(IsInt(validationOption), IsPositive(validationOption));