import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { PrismaService } from "./prisma/prisma.service";
import { GameScoreService } from './game-score/game-score.service';
import { GameScoreController } from './game-score/game-score.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, GameScoreController],
  providers: [AppService, UserService, PrismaService, GameScoreService],
})
export class AppModule {}
