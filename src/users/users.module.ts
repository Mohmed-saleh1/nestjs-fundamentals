import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

class MockUserService {
  findUsers() {
    return ['user11', 'user2'];
  }
}
@Module({
  controllers: [UsersController],
  providers: [
    //Standard Provider
    UsersService,

    //Custom provider
    {
      provide: 'APP_NAME',
      useValue: 'Nest Demo api',
    },
  ],
})
export class UserModule {}
