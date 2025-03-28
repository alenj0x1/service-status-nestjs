import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DataItemStatus } from 'src/enums/data-item-status.enum';

export class DataCreateDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsString()
  @IsOptional()
  trace: string | null;

  @IsEnum(DataItemStatus)
  status: DataItemStatus;
}
