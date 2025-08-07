"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(dto) {
        const user = await this.prismaService.user.create({
            data: {
                ...dto,
            },
        });
        return user;
    }
    async findByEmail(email) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }
    async findById(id) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException('пользователь не найден');
        return user;
    }
    async findBySession(req) {
        const userId = req.session.userId;
        if (!userId) {
            throw new common_1.NotFoundException('Сессия не содержит userId');
        }
        const user = await this.findById(userId);
        return user;
    }
    async searchPrefixByEmail(prefix) {
        const users = await this.prismaService.user.findMany({
            where: {
                email: {
                    startsWith: prefix,
                    mode: 'insensitive',
                },
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
            take: 10,
        });
        return users;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map