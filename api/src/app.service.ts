import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello Universality!';
  }

  async findAll() {
    return await this.prisma.test.findMany();
  }
}
