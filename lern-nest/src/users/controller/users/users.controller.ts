import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  //GET
  @Get()
  getUsers() {
    return [{ username: 'phuong', email: 'phuong@gmail.com' }];
  }

  //"users/post"
  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'phuong',
        email: 'phuong@gmail.com',
        posts: [
          {
            id: 1,
            title: 'post 1',
          },
          {
            id: 2,
            title: 'post 2',
          },
        ],
      },
    ];
  }

  //POST
  @Post('create')
  /*
  postUser(@Req() request: Request, @Res() respone: Response) {
    console.log(request.body);
    respone.send('Created');
  }
  */
  addUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return userData;
  }
}
