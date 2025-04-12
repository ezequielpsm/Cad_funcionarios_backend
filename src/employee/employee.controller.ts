import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '@prisma/client';
import {
  CreateEmployee,
  DeleteEmployeeParams,
  GetEmployeeParams,
  UpdateEmployee,
  UpdateEmployeeParams,
} from './employee.dto';

@Controller('api/music')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createMusic: CreateEmployee): Promise<Employee> {
    return this.employeeService.create(createMusic);
  }

  @Put(':id')
  update(
    @Param() updateEmployeeParams: UpdateEmployeeParams,
    @Body() updateEmployee: UpdateEmployee,
  ): Promise<Employee> {
    return this.employeeService.update(updateEmployeeParams, updateEmployee);
  }

  @Delete(':id')
  delete(@Param() deleteEmployeeParams: DeleteEmployeeParams): Promise<Employee> {
    return this.employeeService.delete(deleteEmployeeParams);
  }

  @Get()
  get(@Query() getEmployeeParams: GetEmployeeParams): Promise<Employee[]> {
    return this.employeeService.get(getEmployeeParams);
  }
}
