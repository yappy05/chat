import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('join-direct-room')
  async handleMassage(
    @MessageBody() directId: string,
    @ConnectedSocket() client: Socket,
  ) {
    await client.join(directId);
    console.log(`Client ${client.id} joined direct room: ${directId}`);
  }

  @SubscribeMessage('send-message')
  handleSendMassage(
    @MessageBody() data: { text: string; directId: string; userId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.to(data.directId).emit('message-received', {
      // id: 'generated-id',
      text: data.text,
      userId: data.userId,
      directId: data.directId,
      // createdAt: new Date().toISOString(),
      // updatedAt: new Date().toISOString(),
    });
  }
}
