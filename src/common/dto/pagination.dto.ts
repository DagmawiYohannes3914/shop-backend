import { Type } from 'class-transformer';
import { IsOptional, Min } from 'class-validator';
import { IsCardinal } from 'common/decorators/is-cardinal.decorator';

export class PaginationDto {


  @IsOptional()
  @Type(() => Number) // Transform the query parameter to a number
  @IsCardinal()
  page?: number = 1; // Default to the first page if not provided

  
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  @IsCardinal()
  readonly limit?: number = 5;


  @IsOptional()
  @IsCardinal()
  readonly offset: number;

}