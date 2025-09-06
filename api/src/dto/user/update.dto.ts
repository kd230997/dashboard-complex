import { PartialType, OmitType } from "@nestjs/swagger";
import { RegisterUserDto } from "./register.dto";
import { IsString, MinLength, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(
  OmitType(RegisterUserDto, ["password"] as const),
) {
  @ApiProperty({ required: false, description: "New password if changing" })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
}
