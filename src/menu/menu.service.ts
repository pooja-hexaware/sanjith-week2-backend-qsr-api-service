import { Injectable } from '@nestjs/common';
import { Menu } from './entities/menu.entity';
import { MenuRepo } from './menu.repository';

@Injectable()
export class MenuService {
  constructor(
    private readonly menuRepo: MenuRepo
  ) {}
  create(menu: Menu) {
    return this.menuRepo.create(menu);
  }

  findAll() {
    return this.menuRepo.findAll();
  }

  findOne(id: string) {
    return this.menuRepo.findById(id);
  }

  update(id: string, updatedMenu: Menu) {
    return this.menuRepo.update(id, updatedMenu);
  }

  remove(id: string) {
    return this.menuRepo.remove(id);
  }
}
