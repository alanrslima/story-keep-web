export type AuthServiceSignUpInput = {
  name: string;
  email: string;
  password: string;
};

export type AuthServiceSignInInput = {
  email: string;
  password: string;
};

export type AuthServiceSignInOutput = {
  token: string;
};
