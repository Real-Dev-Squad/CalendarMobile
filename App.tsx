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
        NotFound: '*',
      },
    },
  };

  return (
    <NavigationContainer theme={RCalTheme} linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name={'Auth'}
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'SignUp'}
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'ForgotPassword'}
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'EmailVerification'}
          component={EmailVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'ResetPassword'}
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{headerShown: false}}
        />

        {/* NOTE: Not Found screen must be placed at the bottom */}
        <Stack.Screen
          name={'NotFound'}
          component={NotFound}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
