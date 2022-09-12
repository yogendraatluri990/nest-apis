import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessagesService } from './services';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
