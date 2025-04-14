import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  IsDateString,

} from 'class-validator';

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

  @IsOptional()
  @IsString()
  bairro: string;

  @IsOptional()
  @IsString()
  cidade: string;

  @IsOptional()
  @IsString()
  estado: string;

  
}

export class UpdateEmployee {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsDateString()
  data?: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  rua: string;

  @IsOptional()
  @IsString()
  cep : string;

  @IsOptional()
  @IsString()
  bairro : string;

  @IsOptional()
  @IsString()
  cidade : string;

  @IsNotEmpty()
  @IsString()
  estado : string;

}

export class UpdateEmployeeParams {
  id: string;
}

export class DeleteEmployeeParams {
  id: string;
}

export class GetEmployeeParams {
  name: string;
}
