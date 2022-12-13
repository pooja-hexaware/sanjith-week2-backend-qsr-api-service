import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from './entities/coupon.entity';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Post()
  create(@Body() coupon: Coupon) {
    return this.couponService.create(coupon);
  }

  @Get()
  findAll() {
    return this.couponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.couponService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedCoupon: Coupon) {
    return this.couponService.update(id, updatedCoupon);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.couponService.remove(id);
  }
}
