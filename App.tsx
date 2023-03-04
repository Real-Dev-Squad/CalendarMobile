import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import EmailVerification from './src/screens/EmailVerification/EmailVerification';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import Home from './src/screens/Home/Home';
import NotFound from './src/screens/NotFound/NotFound';
import UserDetails from './src/screens/Onboarding/UserDetails/UserDetails';
import ConnectCalendar from './src/screens/Onboarding/ConnectCalendar/ConnectCalendar';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const RCalTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

// TODO: deep linking with authentication flow

const App = () => {
  const linking = {
    prefixes: ['https://website-calendar-two.vercel.app', 'calendarmobile://'],
    config: {
      screens: {
        Home: 'home',
        Auth: 'auth',
        Login: 'login',
        SignUp: 'sign-up',
        ForgotPassword: 'forgot-password',
        UserDetails: 'user-details',
        NotFound: '*',
      },
    },
  };

  const screenOptions = {headerShown: false};

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={RCalTheme} linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={screenOptions}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={screenOptions}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={screenOptions}
          />
          <Stack.Screen
            name="EmailVerification"
            component={EmailVerification}
            options={screenOptions}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={screenOptions}
          />
          <Stack.Screen name="Home" component={Home} options={screenOptions} />
          <Stack.Screen
            name="UserDetails"
            component={UserDetails}
            options={screenOptions}
          />
          <Stack.Screen
            name="ConnectCalendar"
            component={ConnectCalendar}
            options={screenOptions}
          />
          {/* NOTE: Not Found screen must be placed at the bottom */}
          <Stack.Screen
            name={'NotFound'}
            component={NotFound}
            options={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
