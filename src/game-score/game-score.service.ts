import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GameScoreService {
  constructor(private prisma: PrismaService) {}

  async getGameScores() {
    return await this.prisma.gameScore.findMany({});
  }
}
