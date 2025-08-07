import { PrismaService } from '../prisma/prisma.service';
import { CreateMassageDto } from './dto/create-massage.dto';
export declare class MassageService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: CreateMassageDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        text: string;
        directId: string;
    }>;
}
