import { Injectable } from '@nestjs/common';

import { MessagesRepository } from '../repositories';

@Injectable()
export class MessagesService {
  //---------------------------------------------------------------
  // @Private Properties
  //---------------------------------------------------------------
  messagesRepo: MessagesRepository;

  constructor() {
    // USE DEPENDENCY INJECTION
    this.messagesRepo = new MessagesRepository();
  }

  getMessage(id: string) {
    return this.messagesRepo.getMessage(id);
  }

  getMessages() {
    return this.messagesRepo.getMessages();
  }

  createMessage(content: string) {
    return this.messagesRepo.createMessage(content);
  }
}
