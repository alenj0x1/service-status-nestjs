import { DataItemStatus } from 'src/enums/data-item-status.enum';

export interface DataItem {
  id: string;
  content: string;
  status: DataItemStatus;
  createdAt: Date;
}
