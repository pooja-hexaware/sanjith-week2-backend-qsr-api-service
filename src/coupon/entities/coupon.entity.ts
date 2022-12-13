import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CouponDocument = Coupon & Document;

@Schema()
export class Coupon {
    _id?: string;
    @Prop()
    name: string;
    @Prop()
    discount: number;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);