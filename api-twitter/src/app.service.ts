import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Here will be backend with connection to MongoDB :)';
  }
}
