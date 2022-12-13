import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { Topping } from './entities/topping.entity';

@Controller('topping')
export class ToppingController {
  constructor(private readonly toppingService: ToppingService) {}

  @Post()
  create(@Body() topping: Topping) {
    return this.toppingService.create(topping);
  }

  @Get()
  findAll() {
    return this.toppingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toppingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedTopping: Topping) {
    return this.toppingService.update(id, updatedTopping);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toppingService.remove(id);
  }
}
