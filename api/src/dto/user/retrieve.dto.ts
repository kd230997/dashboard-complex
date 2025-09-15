import { IsString, MinLength, IsOptional, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RetrieveUserDto {
  @ApiProperty({ required: true, description: "Get user via Email" })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @IsEmail()
  email: string;
}
