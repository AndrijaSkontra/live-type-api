import { Body, Controller, Get, Post } from "@nestjs/common";
import { GameScoreService } from "./game-score.service";

@Controller("game-scores")
export class GameScoreController {
  constructor(private readonly gameScoreService: GameScoreService) {}

  @Get()
  async getAllGameScores() {
    return await this.gameScoreService.getGameScores();
  }

  @Post()
  async addGameScore(@Body() { username, wpm }) {
    await this.gameScoreService.addGameScore(username, wpm);
  }
}
