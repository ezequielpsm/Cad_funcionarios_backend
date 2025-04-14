import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  DeleteEmployeeParams,
  GetEmployeeParams,
  UpdateEmployee,
  UpdateEmployeeParams,
} from './employee.dto';
import { CreateEmployee } from 'src/app.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prismaService: PrismaService) {}

  create({
    name,
    email,
    data,
    cpf,
    rua,
    cep,
    bairro,
    cidade,
    estado,
  }: CreateEmployee): Promise<Employee> {
    return this.prismaService.employee.create({
      data: {
        name,
        email,
        data: new Date(data),
        cpf,
        rua,
        cep,
        bairro,
        cidade,
        estado,
      },
    });
  }

  update(
    { id }: UpdateEmployeeParams,
    { name, email, data, cpf, rua, cep, bairro, cidade, estado }: UpdateEmployee,
  ): Promise<Employee> {
    return this.prismaService.employee.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(data && { data: new Date(data) }),
        ...(cpf && { cpf }),
        ...(rua && { rua }),
        ...(cep && { cep }),
        ...(bairro && { bairro }),
        ...(cidade && { cidade }),
        ...(estado && { estado }),
      },
    });
  }

  delete({ id }: DeleteEmployeeParams): Promise<Employee> {
    return this.prismaService.employee.delete({ where: { id } });
  }

  get({ name }: GetEmployeeParams): Promise<Employee[]> {
    return this.prismaService.employee.findMany({
      where: {
        name,
      },
    });
  }
}
