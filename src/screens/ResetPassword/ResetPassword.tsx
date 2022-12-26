import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {commonStyles} from '../../assets/commonStyles';
import {RCalButton} from '../../components/Buttons/Buttons';
import {PasswordInput} from '../../components/Inputs/Inputs';
import {colors} from '../../constants/colors';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={commonStyles.emailAuthScreenHeading}>HapDay</Text>

      <View style={commonStyles.screenInfoContainer}>
        <Text style={commonStyles.screenInfoHeading}>Reset Password</Text>
      </View>

      <PasswordInput
        inputValue={password}
        errMessage="hello"
        placeholder="Give a strong password"
        onChangeHandler={setPassword}
      />
      <PasswordInput
        inputValue={confirmPassword}
        errMessage="hello"
        placeholder="Confirm password"
        onChangeHandler={setConfirmPassword}
      />
      <RCalButton
        backgroundColor={colors.secondaryColor}
        btnText="Reset password"
        textColor={'white'}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
}

export default ResetPassword;
