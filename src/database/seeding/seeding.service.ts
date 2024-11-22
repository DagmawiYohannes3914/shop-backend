import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class SeedingService {
  constructor(private readonly dataSource: DataSource){}
  async seed() {
    const queryRunner = this.dataSource.createQueryRunner()
  }
}
