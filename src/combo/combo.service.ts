import { Injectable } from '@nestjs/common';
import { ComboRepo } from './combo.repository';
import { Combo } from './entities/combo.entity';

@Injectable()
export class ComboService {
  constructor(
    private readonly comboRepo: ComboRepo
  ) { }
  create(combo: Combo) {
    return this.comboRepo.create(combo);
  }

  findAll() {
    return this.comboRepo.findAll();
  }

  findOne(id: string) {
    return this.comboRepo.findById(id);
  }

  update(id: string, updatedCombo: Combo) {
    return this.comboRepo.update(id, updatedCombo);
  }

  remove(id: string) {
    return this.comboRepo.remove(id);
  }
}
