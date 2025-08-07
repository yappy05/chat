import { UserService } from './user.service';
import { RegisterDto } from '../auth/dto/register.dto';
import { Request } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(dto: RegisterDto): Promise<{
        name: string;
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getCookie(req: Request): import("express-session").Cookie;
    search(prefix: string): Promise<{
        name: string;
        id: string;
        email: string;
    }[]>;
    findBySession(req: Request): Promise<{
        name: string;
        id: string;
        email: string;
    }>;
    findById(id: string): Promise<{
        name: string;
        id: string;
        email: string;
    }>;
}
