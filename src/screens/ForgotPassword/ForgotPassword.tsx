import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../assets/commonStyles';
import {RCalButton} from '../../components/Buttons/Buttons';
import {RCalTextInput} from '../../components/Inputs/Inputs';
import {colors} from '../../constants/colors';
import {styles} from './ForgotPassword-styles';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={commonStyles.emailAuthScreenHeading}>HapDay</Text>
      <View style={styles.screenInfoContainer}>
        <Text style={styles.screenInfoHeading}>Forgot Password?</Text>
        <Text style={{color: colors.subtitleTextColor}}>
          No worries, we'll send you a verfication code
        </Text>
      </View>

      <RCalTextInput
        inputValue={email}
        errMessage="hello"
        label="Email"
        placeholder="johnmobbin@gmail.com"
        onChangeHandler={setEmail}
      />

      <RCalButton
        backgroundColor={colors.secondaryColor}
        btnText="Continue"
        textColor={'white'}
        onPress={() => navigation.navigate('EmailVerification', {email})}
      />
    </SafeAreaView>
  );
}

export default ForgotPassword;
