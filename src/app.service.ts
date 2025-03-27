import { Injectable } from '@nestjs/common';
import { DataItem } from './interfaces/data-item.interface';
import { v4 as uuidv4 } from 'uuid';
import { DataCreateDto } from './dtos/data-create.dto';

@Injectable()
export class AppService {
  private dataItems: DataItem[] = [];

  create({ content, status }: DataCreateDto): DataItem {
    const newItem: DataItem = {
      id: uuidv4(),
      content,
      status,
      createdAt: new Date(),
    };

    this.dataItems.push(newItem);
    return newItem;
  }

  findAll(): DataItem[] {
    return this.dataItems;
  }
}
