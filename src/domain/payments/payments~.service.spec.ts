import { Test, TestingModule } from '@nestjs/testing';
import { Payments~Service } from './payments~.service';

describe('Payments~Service', () => {
  let service: Payments~Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Payments~Service],
    }).compile();

    service = module.get<Payments~Service>(Payments~Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
