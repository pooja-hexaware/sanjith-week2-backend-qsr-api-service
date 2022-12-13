import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Loyalty, LoyaltyDocument } from "./entities/loyalty.entity";

@Injectable()
export class LoyaltyRepo {
    constructor(@InjectModel(Loyalty.name) private loyaltyRepo: Model<LoyaltyDocument>) { }

    async create(Loyalty: Loyalty): Promise<Loyalty> {
        return this.loyaltyRepo.create(Loyalty);
    }

    async findAll(): Promise<Loyalty[]> {
        return this.loyaltyRepo.find();
    }

    async findById(id: string): Promise<Loyalty> {
        return this.loyaltyRepo.findById(id);
    }

    async update(id: string, updatedLoyalty: Loyalty): Promise<Loyalty> {
        return this.loyaltyRepo.findByIdAndUpdate({ _id: id }, updatedLoyalty);
    }

    async remove(id: string): Promise<Loyalty> {
        return this.loyaltyRepo.findByIdAndDelete({ _id: id });
    }
}
