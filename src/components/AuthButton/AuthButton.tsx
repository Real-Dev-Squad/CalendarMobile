import React from 'react';
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
} from 'react-native';
import {styles} from './AuthButton-styles';

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
  return (
    <Pressable style={[styles.btnWrapper, {backgroundColor: backgroundColor}]}>
      <Image source={imgSrc} style={styles.img} />
      <Text style={[styles.btnText, {color: textColor}]}>
        Continue with {btnText}
      </Text>
    </Pressable>
  );
}

export default AuthButton;
