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

export type AuthServiceGetMeOutput = {
  id: string;
  name: string;
  permissions: string[];
};

export type AuthServiceSignInGoogleInput = {
  idToken: string;
};

export type AuthServiceSignInGoogleOutput = {
  token: string;
};
