import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from '../auth/dto/register.dto';
import { User } from '../../generated/prisma';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: RegisterDto): Promise<User> {
    const user = await this.prismaService.user.create({
      data: {
        ...dto,
      },
    });
    return user;
  }

  public async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  public async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (!user) throw new NotFoundException('пользователь не найден');
    return user;
  }

  public async findBySession(req: Request) {
    const userId = req.session.userId;
    if (!userId) {
      throw new NotFoundException('Сессия не содержит userId');
    }
    const user = await this.findById(userId);
    return user;
  }

  public async searchPrefixByEmail(prefix: string) {
    const users = await this.prismaService.user.findMany({
      where: {
        email: {
          startsWith: prefix,
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
      take: 10,
    });
    return users;
  }
}
