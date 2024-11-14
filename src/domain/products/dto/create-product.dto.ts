import { IsNumber, IsOptional, IsPositive, Length } from "class-validator";

export class CreateProductDto {
  @Length(2, 50)
  readonly name: string;

  @IsOptional()
  @Length(1, 500)
  description: string;

  @IsNumber({maxDecimalPlaces: 2})
  @IsPositive()
  price: number;

  categories: number[];

}
