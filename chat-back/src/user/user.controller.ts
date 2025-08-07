import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
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

  @Post('search-by-email')
  public search(@Body('prefix') prefix: string) {
    return this.userService.searchPrefixByEmail(prefix);
  }

  @Get('by-session')
  public findBySession(@Req() req: Request) {
    return this.userService.findBySession(req);
  }

  @Get('by-id/:id')
  public findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }
}
