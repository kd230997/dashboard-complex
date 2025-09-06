import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  getVersion(): string {
    const version = this.configService.get<string>('VERSION');
    return version ? version : "";
  }

  getExpiresIn(): string {
    return this.configService.get<string>('JWT_EXPIRES_IN') || "1h";
  }
}
