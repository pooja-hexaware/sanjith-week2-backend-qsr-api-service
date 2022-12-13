import { Module } from '@nestjs/common';
import { LoyaltyService } from './loyalty.service';
import { LoyaltyController } from './loyalty.controller';
import { LoyaltyRepo } from './loyalty.repository';
import { Loyalty, LoyaltySchema } from './entities/loyalty.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Loyalty.name, schema: LoyaltySchema }])],
  controllers: [LoyaltyController],
  providers: [LoyaltyService, LoyaltyRepo]
})
export class LoyaltyModule {}
