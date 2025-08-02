import { PrismaService } from '../prisma/prisma.service';
export declare class RoomService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(userId: string, directRoomId: string): Promise<void>;
}
