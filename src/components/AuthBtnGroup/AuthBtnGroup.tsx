import React from 'react';
import {View} from 'react-native';
import {Images} from '../../assets/images';
import AuthButton from '../AuthButton/AuthButton';

function AuthBtnGroup() {
  return (
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
  );
}

export default AuthBtnGroup;
