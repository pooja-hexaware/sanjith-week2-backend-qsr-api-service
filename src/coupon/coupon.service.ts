import { Injectable } from '@nestjs/common';
import { CouponRepo } from './coupon.repository';
import { Coupon } from './entities/coupon.entity';

@Injectable()
export class CouponService {
  constructor(
    private readonly couponRepo: CouponRepo
  ) { }

  create(coupon: Coupon) {
    return this.couponRepo.create(coupon);
  }

  findAll() {
    return this.couponRepo.findAll();
  }

  findOne(id: string) {
    return this.couponRepo.findById(id);
  }

  update(id: string, updatedCoupon: Coupon) {
    return this.couponRepo.update(id, updatedCoupon);
  }

  remove(id: string) {
    return this.couponRepo.remove(id);
  }
}
