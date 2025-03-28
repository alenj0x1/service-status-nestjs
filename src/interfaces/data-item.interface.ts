import { DataItemStatus } from 'src/enums/data-item-status.enum';

export interface DataItem {
  id: string;
  title: string;
  description: string | null;
  status: DataItemStatus;
  trace: string | null;
  createdAt: Date;
}
