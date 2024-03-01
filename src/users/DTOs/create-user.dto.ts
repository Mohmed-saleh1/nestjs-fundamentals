import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 20)
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly country: string;

  readonly password: string;
}
