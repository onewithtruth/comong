import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private logger;
    afterInit(server: any): any;
    handleConnection(client: Socket): void;
    handleJoinRoom(client: Socket, room: string): void;
    handleLeaveRoom(client: Socket, room: string): void;
    handleMessage(client: Socket, message: {
        nickname: string;
        room: string;
        text: string;
    }): Promise<void>;
    handleDisconnect(client: Socket, ...args: any[]): void;
}
