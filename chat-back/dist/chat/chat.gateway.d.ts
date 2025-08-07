import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly chatService;
    constructor(chatService: ChatService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleMassage(directId: string, client: Socket): Promise<void>;
    handleSendMassage(data: {
        text: string;
        directId: string;
        userId: string;
    }, client: Socket): void;
}
