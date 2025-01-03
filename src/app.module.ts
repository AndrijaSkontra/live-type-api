import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma/prisma.service";
import { GameScoreService } from "./game-score/game-score.service";
import { GameScoreController } from "./game-score/game-score.controller";
import { EventsModule } from "./events/events.module";

@Module({
  imports: [EventsModule],
  controllers: [AppController, GameScoreController],
  providers: [AppService, PrismaService, GameScoreService],
})
export class AppModule {}
