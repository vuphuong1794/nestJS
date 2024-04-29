import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('example middleware');
    const { auth } = req.headers;
    if (!auth)
      throw new HttpException(
        'you are not authenticated!',
        HttpStatus.FORBIDDEN,
      );
    if (auth === 'phuong') next();
    else throw new HttpException('token is not valid!', HttpStatus.FORBIDDEN);
  }
}
