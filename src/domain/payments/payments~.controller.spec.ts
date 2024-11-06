import { Test, TestingModule } from '@nestjs/testing';
import { Payments~Controller } from './payments~.controller';
import { Payments~Service } from './payments~.service';

describe('Payments~Controller', () => {
  let controller: Payments~Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Payments~Controller],
      providers: [Payments~Service],
    }).compile();

    controller = module.get<Payments~Controller>(Payments~Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
