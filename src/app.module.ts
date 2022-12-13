import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from './store/store.module';
import { MenuModule } from './menu/menu.module';
import { ToppingModule } from './topping/topping.module';
import { CouponModule } from './coupon/coupon.module';
import { OrderModule } from './order/order.module';
import { LoyaltyModule } from './loyalty/loyalty.module';
import { ComboModule } from './combo/combo.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      autoCreate: true,
    }),
    StoreModule,
    MenuModule,
    ToppingModule,
    CouponModule,
    OrderModule,
    LoyaltyModule,
    ComboModule,
    CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
