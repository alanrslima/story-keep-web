import { Api } from "./api";
import {
  AuthServiceGetMeOutput,
  AuthServiceSignInGoogleInput,
  AuthServiceSignInGoogleOutput,
  AuthServiceSignInInput,
  AuthServiceSignInOutput,
  AuthServiceSignUpInput,
} from "./contracts/auth-service-contracts";

export class AuthService {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  async signUp(input: AuthServiceSignUpInput): Promise<void> {
    await this.api.post("/api/auth/sign-up", input);
  }

  async getMe(): Promise<AuthServiceGetMeOutput> {
    const { data } = await this.api.get<AuthServiceGetMeOutput>("/api/auth/me");
    return data;
  }

  async signIn(
    input: AuthServiceSignInInput
  ): Promise<AuthServiceSignInOutput> {
    const { data } = await this.api.post<AuthServiceSignInOutput>(
      "/api/auth/sign-in/email-password",
      input
    );
    return data;
  }

  async completeFirstLogin(): Promise<void> {
    await this.api.post<AuthServiceSignInOutput>(
      "/api/auth/complete-first-login"
    );
  }

  async signInGoogle(
    input: AuthServiceSignInGoogleInput
  ): Promise<AuthServiceSignInOutput> {
    const { data } = await this.api.post<AuthServiceSignInGoogleOutput>(
      "/api/auth/sign-in/google",
      input
    );
    return data;
  }
}
