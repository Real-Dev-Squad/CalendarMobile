export {};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      AuthScreen: undefined;
      Login: undefined;
    }
  }
}
