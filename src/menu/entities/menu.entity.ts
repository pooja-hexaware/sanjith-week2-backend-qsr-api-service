import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
    _id?: string;
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    price: number;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topping' }] })
    toppings: string[];
}

export const MenuSchema = SchemaFactory.createForClass(Menu);