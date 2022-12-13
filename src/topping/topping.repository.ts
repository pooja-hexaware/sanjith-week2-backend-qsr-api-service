import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Topping, ToppingDocument } from "./entities/topping.entity";

@Injectable()
export class ToppingRepo {
    constructor(@InjectModel(Topping.name) private toppingRepo: Model<ToppingDocument>) { }

    async create(topping: Topping): Promise<Topping> {
        return this.toppingRepo.create(topping);
    }

    async findAll(): Promise<Topping[]> {
        return this.toppingRepo.find();
    }

    async findById(id: string): Promise<Topping> {
        return this.toppingRepo.findById(id);
    }

    async update(id: string, updatedTopping: Topping): Promise<Topping> {
        return this.toppingRepo.findByIdAndUpdate({ _id: id }, updatedTopping);
    }

    async remove(id: string): Promise<Topping> {
        return this.toppingRepo.findByIdAndDelete({ _id: id });
    }
}
