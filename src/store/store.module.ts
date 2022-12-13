import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store, StoreSchema } from './entities/store.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from 'src/menu/entities/menu.entity';
import { StoreRepo } from './store.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])
  ],
  controllers: [StoreController],
  providers: [StoreService, StoreRepo]
})
export class StoreModule {}
