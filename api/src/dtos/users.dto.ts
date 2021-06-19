import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsOptional()
  public password: string;

  @IsString()
  public name: string;

  @IsString()
  public nickname: string;

  @IsString()
  @Length(11, 11)
  public studentId: string;

  @IsString()
  public faculty: string;

  @IsString()
  public branch: string;

  @IsString()
  public tel: string;

  @IsString()
  public facebook: string;
}
