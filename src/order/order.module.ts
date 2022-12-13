import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order, OrderSchema } from './entities/order.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderRepo } from './order.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [OrderController],
  providers: [OrderService, OrderRepo]
})
export class OrderModule {}
