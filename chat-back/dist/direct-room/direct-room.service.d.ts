import { PrismaService } from '../prisma/prisma.service';
import { DirectCreateDto } from './dto/direct-create.dto';
import { RoomService } from '../room/room.service';
import { MassageService } from '../massage/massage.service';
import { CreateMassageDto } from '../massage/dto/create-massage.dto';
export declare class DirectRoomService {
    private readonly prismaService;
    private readonly roomService;
    private readonly massageService;
    constructor(prismaService: PrismaService, roomService: RoomService, massageService: MassageService);
    create(dto: DirectCreateDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userIds: string[];
    } | null>;
    findById(id: string): Promise<{
        id: string;
        userIds: string[];
    }>;
    sendMassage(dto: CreateMassageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        text: string;
        directId: string;
    }>;
    getAllMassages(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        userId: string;
        directId: string;
    }[]>;
}
