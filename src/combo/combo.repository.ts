import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Combo, ComboDocument } from "./entities/combo.entity";

@Injectable()
export class ComboRepo {
    constructor(@InjectModel(Combo.name) private comboRepo: Model<ComboDocument>) { }

    async create(combo: Combo): Promise<Combo> {
        return this.comboRepo.create(combo);
    }

    async findAll(): Promise<Combo[]> {
        return this.comboRepo.find();
    }

    async findById(id: string): Promise<Combo> {
        return this.comboRepo.findById(id);
    }

    async update(id: string, updatedCombo: Combo): Promise<Combo> {
        return this.comboRepo.findByIdAndUpdate({ _id: id }, updatedCombo);
    }

    async remove(id: string): Promise<Combo> {
        return this.comboRepo.findByIdAndDelete({ _id: id });
    }
}
