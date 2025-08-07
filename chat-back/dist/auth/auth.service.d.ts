import { PrismaService } from '../prisma/prisma.service';
import { Request } from 'express';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly prismaService;
    private readonly userService;
    constructor(prismaService: PrismaService, userService: UserService);
    register(req: Request, dto: RegisterDto): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(req: Request, dto: LoginDto): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    logout(req: Request): void;
    private saveSession;
}
