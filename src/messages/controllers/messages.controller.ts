import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesDto } from '../dtos';
import { MessagesService } from '../services';

@Controller('messages')
export class MessagesController {
  constructor(private _messagesService: MessagesService) {}

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this._messagesService.getMessage(id);
  }

  @Get()
  getMesages() {
    return this._messagesService.getMessages();
  }

  @Post()
  createMessage(@Body() body: MessagesDto) {
    return this._messagesService.createMessage(body.content);
  }
}
