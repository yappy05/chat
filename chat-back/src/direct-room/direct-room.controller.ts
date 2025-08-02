import { Body, Controller, Post } from '@nestjs/common';
import { DirectRoomService } from './direct-room.service';
import { DirectCreateDto } from './dto/direct-create.dto';

@Controller('direct-room')
export class DirectRoomController {
  constructor(private readonly directRoomService: DirectRoomService) {}

  @Post()
  public create(@Body() dto: DirectCreateDto) {
    return this.directRoomService.create(dto);
  }
}
