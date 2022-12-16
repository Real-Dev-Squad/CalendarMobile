import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {Images} from '../../assets/images';
import AuthButton from '../AuthButton/AuthButton';
import {styles} from './AuthScreen-styles';

function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingVertical: 10,
          // NOTE: gap will be available from RN 0.71.0
          // gap: 2,
        }}>
        <Image source={Images.logo} />
        <Text
          style={{
            color: '#FECC7D',
            fontWeight: '400',
            fontSize: 40,
            lineHeight: 48,
          }}>
          HapDay
        </Text>
        {/* SubTitle */}
        <Text style={{fontWeight: '500', fontSize: 20, lineHeight: 30}}>
          Makes your day happen
        </Text>
      </View>

      {/* Group of buttons */}
      <View>
        <AuthButton
          imgSrc={Images.googleLogo}
          btnText={'Google'}
          backgroundColor="#F7F7F7"
          textColor="#3D3D3D"
        />
        <AuthButton
          imgSrc={Images.appleLogo}
          btnText={'Apple'}
          backgroundColor="#3D3D3D"
          textColor="#F2F2F2"
        />
        <AuthButton
          imgSrc={Images.msftLogo}
          btnText={'Microsoft'}
          backgroundColor="#357EC7"
          textColor="#F2F2F2"
        />
        <AuthButton
          imgSrc={Images.emailLogo}
          btnText={'Email'}
          backgroundColor="#F2F2F2"
          textColor="#3D3D3D"
        />
      </View>
    </SafeAreaView>
  );
}

export default AuthScreen;
