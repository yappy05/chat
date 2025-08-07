import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from '../auth/dto/register.dto';
import { User } from '../../generated/prisma';
import { Request } from 'express';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: RegisterDto): Promise<User>;
    findByEmail(email: string): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findById(id: string): Promise<{
        name: string;
        id: string;
        email: string;
    }>;
    findBySession(req: Request): Promise<{
        name: string;
        id: string;
        email: string;
    }>;
    searchPrefixByEmail(prefix: string): Promise<{
        name: string;
        id: string;
        email: string;
    }[]>;
}
