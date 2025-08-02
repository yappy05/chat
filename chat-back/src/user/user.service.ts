import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from '../auth/dto/register.dto';
import { User } from '../../generated/prisma';

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
}
