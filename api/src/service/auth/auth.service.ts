import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "@/prisma/prisma.service"; // Ensure you have PrismaService
import { v4 as uuidv4 } from "uuid";
import { Prisma } from "@prisma/client";
import { CustomLogger } from "@/src/common/logger/custom-logger.service";
import { ConfigurationService } from "@/src/service/helper/configuration.service";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private readonly logger: CustomLogger,
    private configService: ConfigurationService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException("Invalid credentials");
  }

  login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: this.configService.getExpiresIn(),
      }),
    };
  }

  async register(email: string, password: string, name: string = "") {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRecord: Prisma.UserCreateInput = {
      id: uuidv4(),
      email: email,
      password: hashedPassword,
      name: name,
    };
    try {
      return await this.prisma.user.create({
        data: userRecord,
      });
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        this.logger.error(`Duplicate email registration attempt: ${email}`);
        throw new HttpException("Email already exists", HttpStatus.CONFLICT);
      }

      if (error instanceof Error) {
        this.logger.error(`Unexpected error: ${error.message}`, error.stack);
      } else {
        this.logger.error(`Unexpected non-error: ${JSON.stringify(error)}`);
      }

      throw new HttpException(
        "Something went wrong",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUsers() {
    return this.prisma.user.findMany({
      select: { email: true, name: true },
    });
  }

  async getUser(email: string) {
    return this.prisma.user.findUnique({
      where: { email: email },
    });
  }
}
