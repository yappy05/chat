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
exports.DirectRoomService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const room_service_1 = require("../room/room.service");
const massage_service_1 = require("../massage/massage.service");
let DirectRoomService = class DirectRoomService {
    prismaService;
    roomService;
    massageService;
    constructor(prismaService, roomService, massageService) {
        this.prismaService = prismaService;
        this.roomService = roomService;
        this.massageService = massageService;
    }
    async create(dto) {
        const [user1, user2] = dto.userIds;
        const userIdsArray = [user1, user2].sort();
        try {
            const direct = await this.prismaService.directRoom.create({
                data: {
                    userIds: userIdsArray,
                },
            });
            await this.roomService.create(user1, direct.id);
            await this.roomService.create(user2, direct.id);
            return direct;
        }
        catch (error) {
            if (error.code === 'P2002') {
                const existingRoom = await this.prismaService.directRoom.findFirst({
                    where: {
                        userIds: {
                            equals: userIdsArray,
                        },
                    },
                });
                return existingRoom;
            }
            throw error;
        }
    }
    async findById(id) {
        const direct = await this.prismaService.directRoom.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                userIds: true,
            },
        });
        if (!direct)
            throw new common_1.NotFoundException('такого диалога не найдено');
        return direct;
    }
    async sendMassage(dto) {
        return await this.massageService.create(dto);
    }
    async getAllMassages(id) {
        const direct = await this.prismaService.directRoom.findUnique({
            where: {
                id,
            },
            include: {
                massages: true,
            },
        });
        if (!direct) {
            throw new common_1.NotFoundException('не нашли диалог');
        }
        const massages = direct.massages;
        return massages;
    }
};
exports.DirectRoomService = DirectRoomService;
exports.DirectRoomService = DirectRoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        room_service_1.RoomService,
        massage_service_1.MassageService])
], DirectRoomService);
//# sourceMappingURL=direct-room.service.js.map