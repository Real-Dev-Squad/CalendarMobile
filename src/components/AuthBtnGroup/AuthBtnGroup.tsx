// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Images} from '../../assets/images';
import {ImgButton} from '../Buttons/Buttons';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import {colors} from '../../constants/colors';

function AuthBtnGroup() {
  const continueWith = 'Continue with';

  return (
    <View>
      <ImgButton
        imgSrc={Images.googleLogo}
        btnText={`${continueWith} Google`}
        backgroundColor="#F7F7F7"
        textColor="#3D3D3D"
        onPress={() => {
          // TODO: Test redirect link
          InAppBrowser.openAuth(
            'https://calendar-api-staging.onrender.com/api/v1/auth/google/login',
            'https://calendar-api-staging.onrender.com/api/v1/auth/google/callback?code=&scope=&authuser=&prompt=',
            {
              // iOS Properties
              dismissButtonStyle: 'cancel',
              preferredBarTintColor: colors.primaryColor,
              preferredControlTintColor: 'white',
              readerMode: false,
              animated: true,
              modalPresentationStyle: 'fullScreen',
              modalTransitionStyle: 'coverVertical',
              modalEnabled: true,
              enableBarCollapsing: false,
              // Android Properties
              showTitle: true,
              toolbarColor: colors.primaryColor,
              secondaryToolbarColor: 'black',
              navigationBarColor: 'black',
              navigationBarDividerColor: 'white',
              enableUrlBarHiding: true,
              enableDefaultShare: true,
              forceCloseOnRedirection: false,
              // Specify full animation resource identifier(package:anim/name)
              // or only resource name(in case of animation bundled with app).
              animations: {
                startEnter: 'slide_in_right',
                startExit: 'slide_out_left',
                endEnter: 'slide_in_left',
                endExit: 'slide_out_right',
              },
              headers: {
                'my-custom-header': 'my custom header value',
              },
            },
          );
        }}
      />
      {/* <ImgButton
        imgSrc={Images.appleLogo}
        btnText={`${continueWith} Apple`}
        backgroundColor="#3D3D3D"
        textColor="#F2F2F2"
        onPress={() => {}}
      /> */}
      <ImgButton
        imgSrc={Images.msftLogo}
        btnText={`${continueWith} Microsoft`}
        backgroundColor="#357EC7"
        textColor="#F2F2F2"
        onPress={() => {}}
      />
      {/* <ImgButton
        imgSrc={Images.emailLogo}
        btnText={`${continueWith} email`}
        backgroundColor="#F2F2F2"
        textColor="#3D3D3D"
        onPress={() => navigation.navigate('Login')}
      /> */}
    </View>
  );
}

export default AuthBtnGroup;
