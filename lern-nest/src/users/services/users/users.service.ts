import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'phuong', email: 'phuong@gmail.com' },
    { username: 'minh', email: 'minh@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return 'user has been created';
  }

  fetchUserById(id: number) {
    return { id, username: 'test', email: 'test@gmail.com' };
    //return null;
  }
}
