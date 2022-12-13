import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type LoyaltyDocument = Loyalty & Document;

@Schema()
export class Loyalty {
    _id?: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
    transactionIds: string[];
    @Prop()
    createdDate: Date; 
    @Prop()
    loyaltyPoints: number;
    @Prop()
    phone: string;
    @Prop()
    amount: number
}

export const LoyaltySchema = SchemaFactory.createForClass(Loyalty);