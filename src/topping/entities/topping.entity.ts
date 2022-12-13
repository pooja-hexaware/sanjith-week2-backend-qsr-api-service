import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToppingDocument = Topping & Document;

@Schema()
export class Topping {
    @Prop()
    name: string;
    @Prop()
    calories: number;
    @Prop()
    price: number;
}

export const ToppingSchema = SchemaFactory.createForClass(Topping);