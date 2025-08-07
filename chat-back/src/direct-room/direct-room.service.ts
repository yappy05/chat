import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DirectCreateDto } from './dto/direct-create.dto';
import { RoomService } from '../room/room.service';
import { Request } from 'express';
import { MassageService } from '../massage/massage.service';
import { CreateMassageDto } from '../massage/dto/create-massage.dto';

@Injectable()
export class DirectRoomService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly roomService: RoomService,
    private readonly massageService: MassageService,
  ) {}

  public async create(dto: DirectCreateDto) {
    const [user1, user2] = dto.userIds;
    const userIdsArray = [user1, user2].sort(); // Сортируем для единообразия

    try {
      // Пытаемся создать комнату
      const direct = await this.prismaService.directRoom.create({
        data: {
          userIds: userIdsArray, // Сохраняем как массив
          // ... другие поля из dto
        },
      });

      await this.roomService.create(user1, direct.id);
      await this.roomService.create(user2, direct.id);
      return direct;

    } catch (error) {
      // Обработка ошибки уникальности
      if (error.code === 'P2002') {
        const existingRoom = await this.prismaService.directRoom.findFirst({
          where: {
            userIds: {
              equals: userIdsArray,
            },
          },
        });
        return existingRoom;
      }
      throw error;
    }
  }

  public async findById(id: string) {
    const direct = await this.prismaService.directRoom.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        userIds: true,
      },
    });
    if (!direct) throw new NotFoundException('такого диалога не найдено');
    return direct;
  }

  public async sendMassage(dto: CreateMassageDto) {
    return await this.massageService.create(dto);
  }

  public async getAllMassages(id: string) {
    const direct = await this.prismaService.directRoom.findUnique({
      where: {
        id,
      },
      include: {
        massages: true,
      },
    });
    if (!direct) {
      throw new NotFoundException('не нашли диалог');
    }
    const massages: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      text: string;
      userId: string;
      directId: string;
    }[] = direct.massages;
    return massages;
  }
}
