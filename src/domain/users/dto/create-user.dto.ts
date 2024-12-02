import { IsEmail, IsPhoneNumber, IsString, Length, Matches } from "class-validator";
import { IsPassword } from "common/decorators/validators/is-password.decorator";

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

  @IsPassword()
  readonly password: string;
}
