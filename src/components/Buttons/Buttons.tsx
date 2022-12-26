import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
} from 'react-native';
import {styles} from './Buttons-styles';

export function ImgButton({
  imgSrc,
  btnText,
  backgroundColor,
  textColor,
  onPress,
}: {
  imgSrc: ImageSourcePropType;
  btnText: string;
  backgroundColor: ColorValue;
  textColor: ColorValue;
  onPress: (event: GestureResponderEvent) => void;
}) {
  return (
    <Pressable
      style={[styles.imgBtnWrapper, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Image source={imgSrc} style={styles.img} />
      <Text style={[styles.btnText, {color: textColor}]}>{btnText}</Text>
    </Pressable>
  );
}

export function RCalButton({
  btnText,
  backgroundColor,
  textColor,
  onPress,
}: {
  btnText: string;
  backgroundColor: ColorValue;
  textColor: ColorValue;
  onPress: (event: GestureResponderEvent) => void;
}) {
  return (
    <Pressable
      style={{...styles.btnWrapper, backgroundColor: backgroundColor}}
      onPress={onPress}>
      <Text style={[styles.btnText, {color: textColor}]}>{btnText}</Text>
    </Pressable>
  );
}

export default ImgButton;
