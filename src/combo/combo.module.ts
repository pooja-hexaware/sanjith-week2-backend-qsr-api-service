import { Module } from '@nestjs/common';
import { ComboService } from './combo.service';
import { ComboController } from './combo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Combo, ComboSchema } from './entities/combo.entity';
import { Menu, MenuSchema } from 'src/menu/entities/menu.entity';
import { ComboRepo } from './combo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Combo.name, schema: ComboSchema }]),
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
  ],
  controllers: [ComboController],
  providers: [ComboService, ComboRepo]
})
export class ComboModule {}
