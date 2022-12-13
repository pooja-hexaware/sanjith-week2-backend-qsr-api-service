import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ComboDocument = Combo & Document;

@Schema()
export class Combo {
    _id?: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }] })
    menuItems: string[];
    @Prop()
    discount: number;
}

export const ComboSchema = SchemaFactory.createForClass(Combo);