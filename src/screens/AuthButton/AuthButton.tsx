import React from 'react';
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
} from 'react-native';

function AuthButton({
  imgSrc,
  btnText,
  backgroundColor,
  textColor,
}: {
  imgSrc: ImageSourcePropType;
  btnText: string;
  backgroundColor: ColorValue;
  textColor: ColorValue;
}) {
  console.log({backgroundColor});

  return (
    <Pressable
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        margin: 10,
        backgroundColor: backgroundColor,
        borderRadius: 8,
      }}>
      <Image source={imgSrc} style={{width: 24, height: 'auto'}} />
      <Text style={{color: textColor}}>Continue with {btnText}</Text>
    </Pressable>
  );
}

export default AuthButton;
