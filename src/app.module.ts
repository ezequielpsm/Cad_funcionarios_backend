import { Controller, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { MusicController } from './employee/employee.controller';
import { MusicService } from './employee/employee.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FirebaseModule.forRoot(),
    AuthModule,
    UsersModule,
    RolesModule,
  ],
  controllers: [MusicController],

  providers: [AppService, MusicService, PrismaService],
})
export class AppModule {}
