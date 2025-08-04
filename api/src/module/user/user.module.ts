import { Module } from "@nestjs/common";
import { AuthService } from "../../service/user/auth.service";
import { AuthController } from "../../controller/user/auth.controller";
import { PassportModule } from "@nestjs/passport";
import { PrismaModule } from "prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../../middleware/jwt.strategy";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "secret",
      signOptions: { expiresIn: process.env.TOKEN_EXPIRED_IN },
    }),
    PrismaModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class UserModule {}
