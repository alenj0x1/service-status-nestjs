import { Injectable } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AppService } from './app.service';
import { DataItem } from './interfaces/data-item.interface';

@WebSocketGateway({
  cors: '*',
})
@Injectable()
export class AppGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly appService: AppService) {}

  emitNewData(data: DataItem) {
    this.server.emit('new-data', data);
  }

  emitAllData() {
    this.server.emit('all-data', this.appService.findAll());
  }
}
