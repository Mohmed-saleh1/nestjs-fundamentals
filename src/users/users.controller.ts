import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['ahmed', 'khaled', 'fatma'];
  }

  @Get(':username')
  findOne(@Param('username') param: string): string {
    return param;
  }

  @Post()
  create(@Body() userData: any): string {
    return userData;
  }

  @Patch()
  update(): string {
    return 'user updated';
  }

  @Delete()
  remove(): string {
    return 'user deleted ';
  }
}
