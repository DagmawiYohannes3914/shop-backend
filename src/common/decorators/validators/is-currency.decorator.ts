import { applyDecorators } from '@nestjs/common';
import { IsInt, IsNumber, IsPositive, ValidationOptions } from 'class-validator';

/**
 * Checks if the value is a positive number greater than zero with at most two decimal places.
 */

export const IsCurrency = (
  validationOption?: ValidationOptions,
): PropertyDecorator => applyDecorators(IsNumber({ maxDecimalPlaces: 2}, validationOption), IsPositive(validationOption),);