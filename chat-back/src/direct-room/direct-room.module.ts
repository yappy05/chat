import { Module } from '@nestjs/common';
import { DirectRoomService } from './direct-room.service';
import { DirectRoomController } from './direct-room.controller';
import { RoomService } from '../room/room.service';

@Module({
  controllers: [DirectRoomController],
  providers: [DirectRoomService, RoomService],
})
export class DirectRoomModule {}
