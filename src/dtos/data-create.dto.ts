import { IsEnum, IsString } from 'class-validator';
import { DataItemStatus } from 'src/enums/data-item-status.enum';

export class DataCreateDto {
  @IsString()
  content: string;

  @IsEnum(DataItemStatus)
  status: DataItemStatus;
}
