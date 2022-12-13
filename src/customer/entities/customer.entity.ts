import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
    _id?: string;
    @Prop()
    name: string;
    @Prop()
    street: string;
    @Prop()
    postalCode: string;
    @Prop()
    city: string;
    @Prop()
    phone: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);