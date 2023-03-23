import {IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  readonly username: string; 

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}