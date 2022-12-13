import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Store, StoreDocument } from "./entities/store.entity";

@Injectable()
export class StoreRepo {
    constructor(@InjectModel(Store.name) private storeRepo: Model<StoreDocument>) { }

    async create(store: Store): Promise<Store> {
        return this.storeRepo.create(store);
    }

    async findAll(): Promise<Store[]> {
        return this.storeRepo.find().populate({
            path: 'menuItems',
            populate: {
                path: 'toppings',
                model: 'Topping'
            }
        });
    }

    async findById(id: string): Promise<Store> {
        return this.storeRepo.findById(id);
    }

    async update(id: string, updatedStore: Store): Promise<Store> {
        return this.storeRepo.findByIdAndUpdate({ _id: id }, updatedStore);
    }

    async remove(id: string): Promise<Store> {
        return this.storeRepo.findByIdAndDelete({ _id: id });
    }
}
