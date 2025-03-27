import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DataItem } from './interfaces/data-item.interface';
import { AppGateway } from './app.gateway';
import { DataCreateDto } from './dtos/data-create.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appGateway: AppGateway,
  ) {}

  @Post('new')
  create(@Body() data: DataCreateDto): DataItem {
    const newData = this.appService.create(data);

    this.appGateway.emitNewData(newData);
    return newData;
  }

  @Get('all-data')
  get(): DataItem[] {
    return this.appService.findAll();
  }
}
