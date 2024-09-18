import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from '../cache/cache.service';
import { Injectable, NotFoundException } from '@nestjs/common';

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

  async findCityById(cityId: number): Promise<CityEntity> {
    const city = await this.CityRepository.findOne({
      where: {
        id: cityId,
      },
    });
    if (!city) {
      throw new NotFoundException(`CityId:${cityId} not found `);
    }
    return city;
  }
}
