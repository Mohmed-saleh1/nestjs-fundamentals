import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './DTOs/create-user.dto';
import { UpdateUserDto } from './DTOs/update-user.dto';
import { v4 as uuid } from 'uuid';
import { UserResponseDto } from './DTOs/user.response.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('APP_NAME') private appName: string) {}
  private users: UserEntity[] = [];

  findUsers(): UserEntity[] {
    console.log(this.appName);
    return this.users;
  }

  findUserById(id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): UserResponseDto {
    const newUser: UserEntity = {
      ...createUserDto,
      id: uuid(),
    };
    this.users.push(newUser);
    return new UserResponseDto(newUser);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...updateUserDto };
    return this.users[index];
  }

  deleteUser(id: string): void {
    this.users.filter((user) => user.id !== id);
  }
}
