import { Module } from "@nestjs/common";
import { AuthService } from "../../service/auth/auth.service";
import { AuthController } from "../../controller/auth/auth.controller";
import { PassportModule } from "@nestjs/passport";
import { PrismaModule } from "prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../../middleware/jwt.strategy";
import { CustomLogger } from "@/src/common/logger/custom-logger.service";
import { ConfigurationService } from "@/src/service/helper/configuration.service";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "secret",
      signOptions: { expiresIn: process.env.TOKEN_EXPIRED_IN },
    }),
    PrismaModule,
  ],
  providers: [AuthService, JwtStrategy, CustomLogger, ConfigurationService],
  controllers: [AuthController],
})
export class AuthModule {}
