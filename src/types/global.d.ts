import {NavigationProp} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

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
      Home: undefined;
      UserDetails: NavigationProp;
      ConnectCalendar: NavigationProp;
    }
  }
}

export type EmailVerificationRouteProp = RouteProp<
  RootStackParamList,
  'EmaiLVerification'
>;

export type UserDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'UserDetails'
>;

export type ConnectCalendarProps = NativeStackScreenProps<
  RootStackParamList,
  'UserDetails'
>;
