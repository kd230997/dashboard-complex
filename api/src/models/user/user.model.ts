export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}

// This type omits sensitive data for responses
export type UserResponse = Omit<User, "password">;
