import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DirectRoomModule } from './direct-room/direct-room.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    DirectRoomModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
