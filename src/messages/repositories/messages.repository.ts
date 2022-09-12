import { readFile, writeFile } from 'fs/promises';
import { Message } from '../types';

const filePath = 'messages.json';
export class MessagesRepository {
  async getMessage(id: string) {
    console.log('currentId', id);
    const contents = await readFile(filePath, 'utf8');
    const messages: Message = JSON.parse(contents);
    console.log(messages);
    console.log(messages[id]);
    return messages[id];
  }

  async getMessages(): Promise<Message> {
    const contents = await readFile(filePath, 'utf8');
    const messages: Message = JSON.parse(contents);

    return messages;
  }

  async createMessage(content: string) {
    const contents = await readFile(filePath, 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };
    await writeFile(filePath, JSON.stringify(messages));
  }
}
