import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMassageDto } from './dto/create-massage.dto';

@Injectable()
export class MassageService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(dto: CreateMassageDto) {
    const massage = await this.prismaService.massage.create({
      data: {
        text: dto.text,
        userId: dto.userId,
        directId: dto.directId,
      },
    });
    return massage;
  }
}
