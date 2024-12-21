import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUser(): string {
    return "Marko123";
  }

  async addUser() {
    this.prisma.user.create({
      data: {
        username: "NoviUser" + Date.now(),
      },
    });
  }
}
