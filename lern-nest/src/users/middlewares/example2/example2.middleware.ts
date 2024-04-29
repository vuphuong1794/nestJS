import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Example2Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('middleware 2');
    next();
  }
}
