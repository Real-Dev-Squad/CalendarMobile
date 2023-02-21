import {useNavigation} from '@react-navigation/native';
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
      <View style={styles.labelAndTextInputContainer}>
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
      </View>
      <Text>{errMessage}</Text>
    </View>
  );
}

export function PasswordInput({
  inputValue,
  placeholder,
  onChangeHandler,
  errMessage,
  isForgotPasswordNeeded = false,
}: {
  inputValue: string;
  placeholder?: string;
  onChangeHandler: (input: string) => void;
  errMessage: string;
  isForgotPasswordNeeded?: boolean;
}) {
  const passwordInputRef = useRef<TextInput>(null);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const navigation = useNavigation();

  return (
    <View>
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
      </Pressable>
      <View style={styles.passwordPromptsContainer}>
        <Text>{errMessage}</Text>
        {isForgotPasswordNeeded ? (
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export function PrefixTextInput({
  prefix,
  label,
  inputValue,
  placeholder,
  onChangeHandler,
  errMessage,
}: {
  prefix: string;
  label: string;
  inputValue: string;
  placeholder?: string;
  onChangeHandler: (input: string) => void;
  errMessage: string;
}) {
  const prefixTextInputRef = useRef<TextInput>(null);
  return (
    <View>
      <View style={styles.labelAndTextInputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.prefixInputView}>
          <Text
            style={{
              ...styles.prefixText,
              borderColor: prefixTextInputRef.current?.isFocused()
                ? colors.primaryColor
                : colors.inputBorderColor,
            }}>
            {prefix}
          </Text>
          <TextInput
            ref={prefixTextInputRef}
            style={{
              ...styles.prefixTextInput,
              borderColor: prefixTextInputRef.current?.isFocused()
                ? colors.primaryColor
                : colors.inputBorderColor,
            }}
            value={inputValue}
            placeholder={placeholder}
            onChangeText={onChangeHandler}
            placeholderTextColor={colors.placeHolderTxtColor}
          />
        </View>
      </View>
      <Text>{errMessage}</Text>
    </View>
  );
}
