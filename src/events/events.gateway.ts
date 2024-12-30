import {
  ConnectedSocket,
  MessageBody,
  WebSocketGateway,
} from "@nestjs/websockets";
import { SubscribeMessage } from "@nestjs/websockets";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class EventsGateway {
  constructor() {}

  @SubscribeMessage("events")
  handleEvent(@MessageBody() data: any): string {
    console.log(data, " <- data");
    return data;
  }
}
