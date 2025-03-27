import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';

@Module({
  controllers: [AppController],
  providers: [AppService, AppGateway],
  exports: [AppService, AppGateway],
})
export class AppModule {}
