import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../assets/commonStyles';
import AuthLink from '../../components/AuthLink/AuthLink';
import {RCalButton} from '../../components/Buttons/Buttons';
import {PasswordInput, RCalTextInput} from '../../components/Inputs/Inputs';
import {colors} from '../../constants/colors';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={commonStyles.emailAuthScreenHeading}>HapDay</Text>
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
        isForgotPasswordNeeded={true}
      />
      <RCalButton
        backgroundColor={colors.secondaryColor}
        btnText="Sign up"
        textColor={'white'}
        onPress={() => {}}
      />
      <AuthLink
        prompt="Already on HapDay?"
        linkText="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
}

export default SignUp;
