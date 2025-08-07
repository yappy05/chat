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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectRoomController = void 0;
const common_1 = require("@nestjs/common");
const direct_room_service_1 = require("./direct-room.service");
const direct_create_dto_1 = require("./dto/direct-create.dto");
const create_massage_dto_1 = require("../massage/dto/create-massage.dto");
let DirectRoomController = class DirectRoomController {
    directRoomService;
    constructor(directRoomService) {
        this.directRoomService = directRoomService;
    }
    create(dto) {
        return this.directRoomService.create(dto);
    }
    findById(id) {
        return this.directRoomService.findById(id);
    }
    getAllMassages(id) {
        return this.directRoomService.getAllMassages(id);
    }
    sendMassage(dto) {
        return this.directRoomService.sendMassage(dto);
    }
};
exports.DirectRoomController = DirectRoomController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [direct_create_dto_1.DirectCreateDto]),
    __metadata("design:returntype", void 0)
], DirectRoomController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectRoomController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('get-all-massages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectRoomController.prototype, "getAllMassages", null);
__decorate([
    (0, common_1.Post)('send-massage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_massage_dto_1.CreateMassageDto]),
    __metadata("design:returntype", void 0)
], DirectRoomController.prototype, "sendMassage", null);
exports.DirectRoomController = DirectRoomController = __decorate([
    (0, common_1.Controller)('direct-room'),
    __metadata("design:paramtypes", [direct_room_service_1.DirectRoomService])
], DirectRoomController);
//# sourceMappingURL=direct-room.controller.js.map