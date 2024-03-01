import { Injectable, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

class MockUserService {
  findUsers() {
    return ['user11', 'user2'];
  }
}

@Injectable()
class UserHabitsFactory {
  getHabits() {
    return ['eat', 'sleep', 'code'];
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
    {
      provide: 'USER_HAPPITS',
      useFactory: () => ['eat', 'sleep', 'code'],
    },
  ],
})
export class UserModule {}
