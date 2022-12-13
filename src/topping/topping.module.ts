import { Module } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { ToppingController } from './topping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Topping, ToppingSchema } from './entities/topping.entity';
import { ToppingRepo } from './topping.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Topping.name, schema: ToppingSchema }])],
  controllers: [ToppingController],
  providers: [ToppingService, ToppingRepo]
})
export class ToppingModule {}
