import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Images} from '../../../assets/images';
import {ImgButton} from '../Buttons/Buttons';

function AuthBtnGroup() {
  const continueWith = 'Continue with';
  const navigation = useNavigation();

  return (
    <View>
      <ImgButton
        imgSrc={Images.googleLogo}
        btnText={`${continueWith} Google`}
        backgroundColor="#F7F7F7"
        textColor="#3D3D3D"
        onPress={() => {}}
      />
      <ImgButton
        imgSrc={Images.appleLogo}
        btnText={`${continueWith} Apple`}
        backgroundColor="#3D3D3D"
        textColor="#F2F2F2"
        onPress={() => {}}
      />
      <ImgButton
        imgSrc={Images.msftLogo}
        btnText={`${continueWith} Microsoft`}
        backgroundColor="#357EC7"
        textColor="#F2F2F2"
        onPress={() => {}}
      />
      <ImgButton
        imgSrc={Images.emailLogo}
        btnText={`${continueWith} email`}
        backgroundColor="#F2F2F2"
        textColor="#3D3D3D"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default AuthBtnGroup;
