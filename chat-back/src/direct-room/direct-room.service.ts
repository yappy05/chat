import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DirectCreateDto } from './dto/direct-create.dto';
import { RoomService } from '../room/room.service';

@Injectable()
export class DirectRoomService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly roomService: RoomService,
  ) {}

  public async create(dto: DirectCreateDto) {
    const [user1, user2] = dto.userIds;
    const direct = await this.prismaService.directRoom.create({
      data: {
        ...dto,
      },
    });
    await this.roomService.create(user1, direct.id);
    await this.roomService.create(user2, direct.id);
    return direct;
  }
}
