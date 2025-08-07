import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DirectRoomService } from './direct-room.service';
import { DirectCreateDto } from './dto/direct-create.dto';
import { Request } from 'express';
import { CreateMassageDto } from '../massage/dto/create-massage.dto';

@Controller('direct-room')
export class DirectRoomController {
  constructor(private readonly directRoomService: DirectRoomService) {}

  @Post()
  public create(@Body() dto: DirectCreateDto) {
    return this.directRoomService.create(dto);
  }

  @Get('by-id/:id')
  public findById(@Param('id') id: string) {
    return this.directRoomService.findById(id);
  }

  @Get('get-all-massages/:id')
  public getAllMassages(@Param('id') id: string) {
    return this.directRoomService.getAllMassages(id);
  }

  @Post('send-massage')
  public sendMassage(@Body() dto: CreateMassageDto) {
    return this.directRoomService.sendMassage(dto);
  }
}
