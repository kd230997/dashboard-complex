import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDto {
  @ApiProperty({ example: "John Doe", description: "The name of the user" })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: "john@example.com", description: "The email of the user" })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: "password123", description: "The user's password" })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
