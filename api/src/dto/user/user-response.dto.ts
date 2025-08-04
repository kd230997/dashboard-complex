import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../models/user/user.model";

export class UserResponseDto implements Omit<User, "password"> {
  @ApiProperty({ example: 1, description: "The unique identifier of the user" })
  id: number;

  @ApiProperty({ example: "John Doe", description: "The name of the user" })
  name: string;

  @ApiProperty({ example: "john@example.com", description: "The email of the user" })
  email: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}

// For authentication responses
export class LoginResponseDto {
  @ApiProperty({ description: "JWT access token" })
  access_token: string;

  constructor(partial: Partial<LoginResponseDto>) {
    Object.assign(this, partial);
  }
}
