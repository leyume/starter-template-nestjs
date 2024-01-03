import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { PrismaService as PrismaServiceTest } from './prisma.service.test';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, PrismaServiceTest],
})
export class AppModule {}
