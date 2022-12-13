import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
    _id?: string;
    @Prop()
    orderedItems: Object[];
    @Prop()
    comboDetails: Object[];
    @Prop()
    comboTotal: number;
    @Prop()
    finalPrice: number;
    @Prop()
    phone: string
}

export const OrderSchema = SchemaFactory.createForClass(Order);