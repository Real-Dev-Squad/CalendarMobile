import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../commonStyles';
import {RCalButton} from '../../components/Buttons/Buttons';
import {colors} from '../../constants/colors';
import {EmailVerificationRouteProp} from '../../types/global';
import OtpInputs from 'react-native-otp-inputs';
import {styles} from './EmailVerification-styles';

function EmailVerification({route}: EmailVerificationRouteProp) {
  const email = route.params.email;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={commonStyles.emailAuthScreenHeading}>HapDay</Text>

      <View style={commonStyles.screenInfoContainer}>
        <Text style={commonStyles.screenInfoHeading}>Verification Code</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleBoldText}>4 digit</Text>
          <Text style={styles.subtitleNormalText}>code has been sent to</Text>
          <Text style={styles.subtitleBoldText}>{email}</Text>
        </View>
      </View>

      <OtpInputs
        handleChange={code => console.log(code)}
        numberOfInputs={4}
        autofillFromClipboard={false}
        style={styles.otpInputsContainer}
        inputContainerStyles={styles.otpInputContainStyles}
        inputStyles={styles.otpInputStyles}
      />

      <View style={styles.verificationPromptContainer}>
        <Text style={styles.verificationPromptText}>Didn't receive code?</Text>
        <Pressable onPress={() => {}}>
          <Text style={styles.resendOtpButton}>Send again</Text>
        </Pressable>
      </View>

      <RCalButton
        backgroundColor={colors.secondaryColor}
        btnText="Continue"
        textColor={'white'}
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </SafeAreaView>
  );
}

export default EmailVerification;
