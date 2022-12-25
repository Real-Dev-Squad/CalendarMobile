import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {RCalButton} from '../../components/Buttons/Buttons';
import {PasswordInput, RCalTextInput} from '../../components/Inputs/Inputs';
import {colors} from '../../constants/colors';
import AuthLink from '../../components/AuthLink/AuthLink';
import {styles} from './Login-styles';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>HapDay</Text>
      <RCalTextInput
        inputValue={name}
        errMessage="hello"
        label="Name"
        placeholder="John Mobbin"
        onChangeHandler={setName}
      />
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
