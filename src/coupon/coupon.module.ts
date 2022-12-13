import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';
import { Coupon, CouponSchema } from './entities/coupon.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponRepo } from './coupon.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Coupon.name, schema: CouponSchema }])],
  controllers: [CouponController],
  providers: [CouponService, CouponRepo]
})
export class CouponModule {}
