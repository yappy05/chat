import { PrismaService } from '../prisma/prisma.service';
import { DirectRoom, User } from '../../generated/prisma';
export declare class DirectRoomParticipantService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    protected create(user: User, directRoom: DirectRoom): Promise<void>;
}
