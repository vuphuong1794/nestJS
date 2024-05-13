import { Test, TestingModule } from '@nestjs/testing';
import { UsersServiceTest } from './usersTest.service';

describe('UsersServiceTest', () => {
  let service: UsersServiceTest;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersServiceTest],
    }).compile();

    service = module.get<UsersServiceTest>(UsersServiceTest);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
