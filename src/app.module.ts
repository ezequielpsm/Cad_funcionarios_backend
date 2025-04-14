import { Controller, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FirebaseModule.forRoot(),
    AuthModule,
    UsersModule,
    RolesModule,
  ],
  controllers: [EmployeeController],

  providers: [AppService, EmployeeService, PrismaService],
})
export class AppModule {}
