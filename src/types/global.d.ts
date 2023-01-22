export {};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      AuthScreen: undefined;
      Login: undefined;
      SignUp: undefined;
      ForgotPassword: undefined;
      EmailVerification: {email: string};
      ResetPassword: undefined;
    }
  }
}

export type EmailVerificationRouteProp = RouteProp<
  RootStackParamList,
  'EmaiLVerification'
>;
