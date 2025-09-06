export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  resetToken?: String;
  resetTokenExp?: Date;
}

// This type omits sensitive data for responses
export type UserResponse = Omit<User, "password">;
