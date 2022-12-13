import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Menu, MenuDocument } from "./entities/menu.entity";

@Injectable()
export class MenuRepo {
    constructor(@InjectModel(Menu.name) private menuRepo: Model<MenuDocument>) { }

    async create(menu: Menu): Promise<Menu> {
        return this.menuRepo.create(menu);
    }

    async findAll(): Promise<Menu[]> {
        return this.menuRepo.find().populate('toppings');
    }

    async findById(id: string): Promise<Menu> {
        return this.menuRepo.findById(id);
    }

    async update(id: string, updatedMenu: Menu): Promise<Menu> {
        return this.menuRepo.findByIdAndUpdate({ _id: id }, updatedMenu);
    }

    async remove(id: string): Promise<Menu> {
        return this.menuRepo.findByIdAndDelete({ _id: id });
    }
}
