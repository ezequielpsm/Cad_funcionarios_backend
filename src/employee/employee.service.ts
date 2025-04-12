import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateEmployee,
  DeleteEmployeeParams,
  GetEmployeeParams,
  UpdateEmployee,
  UpdateEmployeeParams,
} from './employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly prismaService: PrismaService) {}
  create({ author, name }: CreateEmployee): Promise<Employee> {
    return this.prismaService.employee.create({ data: { name, author } });
  }

  update(
    { id }: UpdateEmployeeParams,
    { author, name }: UpdateEmployee,
  ): Promise<Employee> {
    return this.prismaService.employee.update({
      data: { name, author },
      where: { id },
    });
  }

  delete({ id }: DeleteEmployeeParams): Promise<Employee> {
    return this.prismaService.employee.delete({ where: { id } });
  }

  get({ author, name }: GetEmployeeParams): Promise<Employee[]> {
    return this.prismaService.employee.findMany({ where: { author, name } });
  }
}
