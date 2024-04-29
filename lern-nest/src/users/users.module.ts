import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { Example2Middleware } from './middlewares/example2/example2.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})

//ap dung middleware cho tat ca routes cua users
/*
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes('users');
  }
}
*/
//ap dung middleware cho nhung routes sai phuong thuc chi dinh
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //ap dung cho /users
    consumer.apply(ExampleMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    });
    //ap dung cho /users/:id
    consumer
      .apply(ExampleMiddleware)
      .forRoutes({
        path: 'users/:id',
        method: RequestMethod.GET,
      })
      .apply(Example2Middleware)
      .forRoutes({
        path: '/users/create',
        method: RequestMethod.POST,
      });
  }
}
