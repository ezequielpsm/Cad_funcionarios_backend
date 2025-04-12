import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmployee {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  author: string;
}

export class UpdateEmployee {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  author?: string;
}

export class UpdateEmployeeParams {
  id: string;
}

export class DeleteEmployeeParams {
  id: string;
}

export class GetEmployeeParams {
  name: string;
  author: string;
}
