import { Test, TestingModule } from '@nestjs/testing';
import { AcController } from './ac.controller';
import { AcService } from './ac.service';

describe('AcController', () => {
  let authController: AcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AcController],
      providers: [AcService],
    }).compile();

    authController = app.get<AcController>(AcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authController.getHello()).toBe('Hello World!');
    });
  });
});
