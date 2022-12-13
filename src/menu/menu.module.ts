import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu, MenuSchema } from './entities/menu.entity';
import { Topping, ToppingSchema } from 'src/topping/entities/topping.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuRepo } from './menu.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
    MongooseModule.forFeature([{ name: Topping.name, schema: ToppingSchema }])
  ],
  controllers: [MenuController],
  providers: [MenuService, MenuRepo]
})
export class MenuModule {}
