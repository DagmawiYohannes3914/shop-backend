import { Type } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';
import { IsCardinal } from 'common/decorators/is-cardinal.decorator';

export class PaginationDto {


  // @IsOptional()
  // // @Max(MAX_PAGE_NUMBER)
  // @IsCardinal()
  // page?: number = 1; 

  
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  @IsCardinal()
  readonly limit?: number;


  @IsOptional()
  @IsCardinal()
  readonly offset: number;

}