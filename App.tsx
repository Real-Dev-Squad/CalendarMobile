import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import EmailVerification from './src/screens/EmailVerification/EmailVerification';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';

const Stack = createNativeStackNavigator();

const RCalTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={RCalTheme}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
