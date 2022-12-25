import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../assets/commonStyles';
import {RCalButton} from '../../components/Buttons/Buttons';
import {colors} from '../../constants/colors';
import {EmailVerificationRouteProp} from '../../types/global';
import OtpInputs from 'react-native-otp-inputs';

function EmailVerification({route}: EmailVerificationRouteProp) {
  const email = route.params.email;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={commonStyles.emailAuthScreenHeading}>HapDay</Text>

      <View style={commonStyles.screenInfoContainer}>
        <Text style={commonStyles.screenInfoHeading}>Verification Code</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: colors.subtitleTextColor,
              fontSize: 12,
              fontWeight: 'bold',
              paddingRight: 2,
            }}>
            4 digit
          </Text>
          <Text
            style={{
              color: colors.subtitleTextColor,
              fontSize: 12,
              paddingRight: 2,
            }}>
            code has been sent to
          </Text>
          <Text
            style={{
              color: colors.subtitleTextColor,
              fontSize: 12,
              fontWeight: 'bold',
              paddingRight: 2,
            }}>
            {email}
          </Text>
        </View>
      </View>

      {/* OTP Input */}
      <OtpInputs
        handleChange={code => console.log(code)}
        numberOfInputs={4}
        autofillFromClipboard={false}
        style={{display: 'flex', flexDirection: 'row'}}
        inputContainerStyles={{
          backgroundColor: '#F2F2F2',
          borderRadius: 10,
          padding: 8,
          margin: 2,
        }}
        inputStyles={{
          color: '#1F1F1F',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
        }}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          paddingLeft: 45,
          paddingBottom: 15,
        }}>
        <Text
          style={{
            color: colors.inputPromptColor,
            paddingRight: 2,
            fontSize: 12,
          }}>
          Didn't receive code?
        </Text>
        <Pressable onPress={() => {}}>
          <Text
            style={{
              color: colors.inputPromptColor,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              fontSize: 12,
            }}>
            Send again
          </Text>
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
