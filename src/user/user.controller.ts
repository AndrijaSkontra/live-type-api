import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Post()
  async addUser(@Body() { username, wpm }) {
    try {
      console.log("ADDING USERNAME:", username);
      await this.userService.addUser(username, wpm);
      return `username: ${username}, wpm: ${wpm}. ADDED.`;
    } catch (e) {
      return "Fail" + e.message;
    }
  }
}
