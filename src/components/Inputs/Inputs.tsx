import React, {useRef, useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {Images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {styles} from './Inputs-styles';

export function RCalTextInput({
  label,
  inputValue,
  placeholder,
  onChangeHandler,
  errMessage,
}: {
  label: string;
  inputValue: string;
  placeholder?: string;
  onChangeHandler: (input: string) => void;
  errMessage: string;
}) {
  const rCalTextInputRef = useRef<TextInput>(null);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={rCalTextInputRef}
        style={{
          ...styles.textInput,
          borderColor: rCalTextInputRef.current?.isFocused()
            ? colors.primaryColor
            : colors.inputBorderColor,
        }}
        value={inputValue}
        placeholder={placeholder}
        onChangeText={onChangeHandler}
        placeholderTextColor={colors.placeHolderTxtColor}
      />
      <Text>{errMessage}</Text>
    </View>
  );
}

export function PasswordInput({
  inputValue,
  placeholder,
  onChangeHandler,
  errMessage,
}: {
  inputValue: string;
  placeholder?: string;
  onChangeHandler: (input: string) => void;
  errMessage: string;
}) {
  const passwordInputRef = useRef<TextInput>(null);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <Pressable onPress={() => passwordInputRef.current?.focus()}>
      <Text style={styles.label}>Password</Text>
      <View
        style={{
          ...styles.passwordView,
          borderColor: passwordInputRef.current?.isFocused()
            ? colors.primaryColor
            : colors.inputBorderColor,
        }}>
        <TextInput
          ref={passwordInputRef}
          value={inputValue}
          secureTextEntry={isPasswordHidden}
          placeholder={placeholder}
          onChangeText={onChangeHandler}
          placeholderTextColor={colors.placeHolderTxtColor}
          style={styles.passwordInput}
        />
        <Pressable
          onPress={() =>
            setIsPasswordHidden(prevIsPasswordHidden => !prevIsPasswordHidden)
          }>
          <Image
            source={
              isPasswordHidden ? Images.showPassword : Images.hidePassword
            }
          />
        </Pressable>
      </View>
      <Text>{errMessage}</Text>
    </Pressable>
  );
}
