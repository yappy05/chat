import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Request } from 'express';
import { User } from '../../generated/prisma';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  public async register(req: Request, dto: RegisterDto) {
    const user = await this.userService.create(dto);
    await this.saveSession(req, user);
    return user;
  }

  private async saveSession(req: Request, user: User): Promise<void> {
    req.session.userId = user.id;
    return new Promise((resolve, reject) => {
      req.session.save((err) => {
        if (err) reject(new InternalServerErrorException('no connect'));
      });
      resolve();
    });
  }
}
