import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Coupon, CouponDocument } from "./entities/coupon.entity";

@Injectable()
export class CouponRepo {
    constructor(@InjectModel(Coupon.name) private couponRepo: Model<CouponDocument>) { }

    async create(coupon: Coupon): Promise<Coupon> {
        return this.couponRepo.create(coupon);
    }

    async findAll(): Promise<Coupon[]> {
        return this.couponRepo.find();
    }

    async findById(id: string): Promise<Coupon> {
        return this.couponRepo.findById(id);
    }

    async update(id: string, updatedCoupon: Coupon): Promise<Coupon> {
        return this.couponRepo.findByIdAndUpdate({ _id: id }, updatedCoupon);
    }

    async remove(id: string): Promise<Coupon> {
        return this.couponRepo.findByIdAndDelete({ _id: id });
    }
}
