import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {RCalButton} from '../../components/Buttons/Buttons';
import {PasswordInput, RCalTextInput} from '../../components/Inputs/Inputs';
import {colors} from '../../constants/colors';
import AuthLink from '../../components/AuthLink/AuthLink';
import {commonStyles} from '../../assets/commonStyles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={commonStyles.emailAuthScreenHeading}>HapDay</Text>
      <RCalTextInput
        inputValue={email}
        errMessage="hello"
        label="Email"
        placeholder="johnmobbin@gmail.com"
        onChangeHandler={setEmail}
      />
      <PasswordInput
        inputValue={password}
        errMessage="hello"
        placeholder="Give a strong password"
        onChangeHandler={setPassword}
        isForgotPasswordNeeded={true}
      />
      <RCalButton
        backgroundColor={colors.secondaryColor}
        btnText="Login"
        textColor={'white'}
        onPress={() => {}}
      />
      <AuthLink
        prompt="New to HapDay?"
        linkText="Create Account"
        onPress={() => navigation.navigate('SignUp')}
      />
    </SafeAreaView>
  );
}

export default Login;
