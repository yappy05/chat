import { DirectRoomService } from './direct-room.service';
import { DirectCreateDto } from './dto/direct-create.dto';
import { CreateMassageDto } from '../massage/dto/create-massage.dto';
export declare class DirectRoomController {
    private readonly directRoomService;
    constructor(directRoomService: DirectRoomService);
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
    getAllMassages(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        userId: string;
        directId: string;
    }[]>;
    sendMassage(dto: CreateMassageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        text: string;
        directId: string;
    }>;
}
