import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prismaService: PrismaService) {}

  //todo переписать на userId[] и createMany
  public async create(userId: string, directRoomId: string) {
    await this.prismaService.room.create({
      data: {
        userId,
        directRoomId,
      },
    });
  }
}
