import { Injectable } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly StateRepository: Repository<StateEntity>,
  ) {}

  async getAllState(): Promise<StateEntity[]> {
    return this.StateRepository.find();
  }
}
