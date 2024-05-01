import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly CityRepository: Repository<CityEntity>,
    private readonly cashService: CacheService,
  ) {}

  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    return this.cashService.getCache<CityEntity[]>(`stateId_${stateId}`, () =>
      this.CityRepository.find({
        where: {
          stateId,
        },
      }),
    );
  }
}
