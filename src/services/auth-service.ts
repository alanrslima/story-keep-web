import { Api } from "./api";
import {
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
    await this.api.post("/api/auth/signup", input);
  }

  async signIn(
    input: AuthServiceSignInInput
  ): Promise<AuthServiceSignInOutput> {
    return await this.api.post("/api/auth/signin", input);
  }
}
