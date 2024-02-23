import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './DTOs/create-user.dto';
import { UpdateUserDto } from './DTOs/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('users')
export class UsersController {
  private users: UserEntity[] = [];
  @Get()
  find(): UserEntity[] {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const newUser: UserEntity = {
      ...createUserDto,
      id: uuid(),
    };
    this.users.push(newUser);
    return newUser;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...updateUserDto };
    return this.users[index];
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.users.filter((user) => user.id !== id);
  }
}
