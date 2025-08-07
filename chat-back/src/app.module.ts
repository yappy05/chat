import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DirectRoomModule } from './direct-room/direct-room.module';
import { RoomModule } from './room/room.module';
import { MassageModule } from './massage/massage.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    DirectRoomModule,
    RoomModule,
    MassageModule,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
