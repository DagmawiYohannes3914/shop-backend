import { IsEmail, IsPhoneNumber, IsString, Length, Matches } from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(2, 50)
  readonly name: string;

  @IsString() 
  @IsEmail()
  readonly email: string;

  @IsPhoneNumber()
  @IsString()
  readonly phone: string;

  // @Matches()
  @IsString()
  readonly password: string;
}
