import { UsersService } from './../../services/users/users.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user.pipe';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  //GET All USER
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
  //CREATE USER
  @Post('create')
  /*
  postUser(@Req() request: Request, @Res() respone: Response) {
    console.log(request.body);
    respone.send('Created');
  }
  */
  @UsePipes(new ValidationPipe())
  //su dung custom pipes de chuyen age tu string sang int va kiem tra
  //su dung custom pipe cho age vi trong validation pipe cua user co phuong thuc IsNumber nhung chi duoc phep nhap Number con string thi bao loi
  //doi voi custom pipe thi du nguoi dung cho nhap "24" no chuyen dang sang number ma khong bao loi
  addUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData.age.toPrecision());
    return this.userService.createUser(userData);
  }

  //ParseIntPipe: kiem tra xem ng dung co nhap dung dinh dang hay khong
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
