import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComboService } from './combo.service';
import { Combo } from './entities/combo.entity';

@Controller('combo')
export class ComboController {
  constructor(private readonly comboService: ComboService) {}

  @Post()
  create(@Body() combo: Combo) {
    return this.comboService.create(combo);
  }

  @Get()
  findAll() {
    return this.comboService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comboService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedCombo: Combo) {
    return this.comboService.update(id, updatedCombo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comboService.remove(id);
  }
}
