import { post } from "./api";

export type AuthUser = {
  id: number;
  email: string;
  name: string;
};

export type AuthResponse = {
  token: string;
  user: AuthUser;
};

export const login = (email: string, password: string) =>
  post<AuthResponse>("/auth/login", { email, password });

export const register = (name: string, email: string, password: string) =>
  post<AuthResponse>("/auth/register", { name, email, password });

