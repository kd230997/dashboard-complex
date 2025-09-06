import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { AuthService } from "@/src/service/auth/auth.service";
import { JwtAuthGuard } from "@/src/middleware/jwt-auth.guard";
import { RegisterUserDto } from "@/src/dto/user/register.dto";
import { LoginDto } from "@/src/dto/user/login.dto";
import { ApiBearerAuth } from "@nestjs/swagger";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }

  @Post("register")
  @HttpCode(HttpStatus.OK)
  async register(
    @Body() body: RegisterUserDto,
  ) {
    return this.authService.register(body.email, body.password, body.name);
  }

  @ApiBearerAuth('access-token')
  @Get("users")
  @UseGuards(JwtAuthGuard)
  getUsers() {
    return this.authService.getUsers();
  }
}
