// @ts-nocheck

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

describe('AppController', () => {
  let appController: AppController;
  // let appService: AppService;
  // let prisma: PrismaService;

  beforeEach(async () => {
    // appService = new AppService(prisma);
    // appController = new AppController(appService);

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello Universality!"', () => {
      expect(appController.getHello()).toBe('Hello Universality!');
    });
  });

  //Test the DB method
  it('should return first item in tests table in DB', async () => {
    const result = await appController.test();
    let expected = {
      id: 1,
      name: 'Jill',
      age: 20,
      date: new Date('2024-01-03T09:47:31.000Z'),
    };

    expect(expected).toStrictEqual(result[0]);
  });
});
