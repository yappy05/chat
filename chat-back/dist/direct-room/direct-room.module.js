"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectRoomModule = void 0;
const common_1 = require("@nestjs/common");
const direct_room_service_1 = require("./direct-room.service");
const direct_room_controller_1 = require("./direct-room.controller");
const room_service_1 = require("../room/room.service");
const massage_service_1 = require("../massage/massage.service");
let DirectRoomModule = class DirectRoomModule {
};
exports.DirectRoomModule = DirectRoomModule;
exports.DirectRoomModule = DirectRoomModule = __decorate([
    (0, common_1.Module)({
        controllers: [direct_room_controller_1.DirectRoomController],
        providers: [direct_room_service_1.DirectRoomService, room_service_1.RoomService, massage_service_1.MassageService],
    })
], DirectRoomModule);
//# sourceMappingURL=direct-room.module.js.map