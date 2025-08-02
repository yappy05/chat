import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from '../auth/dto/register.dto';
import { User } from '../../generated/prisma';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: RegisterDto): Promise<User>;
}
