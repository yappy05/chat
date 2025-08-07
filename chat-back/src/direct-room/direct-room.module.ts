import { Module } from '@nestjs/common';
import { DirectRoomService } from './direct-room.service';
import { DirectRoomController } from './direct-room.controller';
import { RoomService } from '../room/room.service';
import { MassageService } from '../massage/massage.service';

@Module({
  controllers: [DirectRoomController],
  providers: [DirectRoomService, RoomService, MassageService],
})
export class DirectRoomModule {}
