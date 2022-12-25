import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../assets/commonStyles';

function EmailVerification() {
  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={{color: 'black'}}>Email verification</Text>
    </SafeAreaView>
  );
}

export default EmailVerification;
