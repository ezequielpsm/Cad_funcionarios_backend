import { Injectable } from '@nestjs/common';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDateString,
  isNotEmpty,
} from 'class-validator';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export class CreateEmployee {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDateString()
  data: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  rua: string;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  estado: string;
}
