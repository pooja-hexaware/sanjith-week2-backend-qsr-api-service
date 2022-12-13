import { Injectable } from '@nestjs/common';
import { Store } from './entities/store.entity';
import { StoreRepo } from './store.repository';

@Injectable()
export class StoreService {
  constructor(
    private readonly storeRepo: StoreRepo
  ) { }
  
  create(store: Store) {
    return this.storeRepo.create(store);
  }

  findAll() {
    return this.storeRepo.findAll()
  }

  findOne(id: string) {
    return this.storeRepo.findById(id);
  }

  update(id: string, updatedStore: Store) {
    return this.storeRepo.update(id, updatedStore);
  }

  remove(id: string) {
    return this.storeRepo.remove(id);
  }
}
