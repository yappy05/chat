import { DirectRoomService } from './direct-room.service';
import { DirectCreateDto } from './dto/direct-create.dto';
export declare class DirectRoomController {
    private readonly directRoomService;
    constructor(directRoomService: DirectRoomService);
    create(dto: DirectCreateDto): Promise<{
        id: string;
        userIds: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
}
