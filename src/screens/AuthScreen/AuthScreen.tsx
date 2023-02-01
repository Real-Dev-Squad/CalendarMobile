import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {Images} from '../../assets/images';
import AuthBtnGroup from '../../components/Auth/AuthBtnGroup/AuthBtnGroup';
import {colors} from '../../constants/colors';
import {styles} from './AuthScreen-styles';

function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heroSection}>
        <Image source={Images.logo} />
        <Text style={[styles.heroTitle, {color: colors.primaryColor}]}>
          HapDay
        </Text>
        <Text style={styles.heroSubtitle}>Makes your day happen</Text>
      </View>

      <AuthBtnGroup />
    </SafeAreaView>
  );
}

export default AuthScreen;
