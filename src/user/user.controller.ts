import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Post()
  addUser() {
    try {
      this.userService.addUser();
      return "Success";
    } catch {
      return "Fail";
    }
  }
}
