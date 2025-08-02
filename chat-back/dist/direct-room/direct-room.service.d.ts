import { PrismaService } from '../prisma/prisma.service';
import { DirectCreateDto } from './dto/direct-create.dto';
import { RoomService } from '../room/room.service';
export declare class DirectRoomService {
    private readonly prismaService;
    private readonly roomService;
    constructor(prismaService: PrismaService, roomService: RoomService);
    create(dto: DirectCreateDto): Promise<{
        id: string;
        userIds: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
}
