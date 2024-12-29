import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GameScoreService {
  constructor(private prisma: PrismaService) {}

  async addGameScore(username: string, wpm: number) {
    await this.prisma.gameScore.create({
      data: {
        username: username,
        wpm: wpm,
      },
    });
  }

  async getGameScores() {
    const gameScores = await this.prisma.gameScore.aggregateRaw({
      pipeline: [
        {
          $group: {
            _id: "$username",
            maxWpm: { $max: "$wpm" },
          },
        },
        {
          $sort: { maxWpm: -1 },
        },
        {
          $limit: 30,
        },
      ],
    });
    return gameScores;
  }
}
