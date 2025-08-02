import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from '../auth/dto/register.dto';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() dto: RegisterDto) {
    return this.userService.create(dto);
  }

  @Get()
  public getCookie(@Req() req: Request) {
    return req.session.cookie;
  }
}
