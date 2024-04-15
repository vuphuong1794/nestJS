import { UsersService } from './../../services/users/users.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  //GET
  @Get()
  getUsers() {
    return this.userService.fetchUsers();
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
  @UsePipes(new ValidationPipe())
  addUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return this.userService.createUser(userData);
  }

  //ParseIntPipe: kiem tra xem ng dung co nhap dung dinh dang hay khong
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
