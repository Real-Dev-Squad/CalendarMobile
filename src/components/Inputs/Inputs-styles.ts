import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  label: {
    color: 'black',
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '500',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
    padding: 10,
    width: 325,
  },
  labelAndTextInputContainer: {gap: 10},
  passwordInput: {
    color: 'black',
  },
  passwordView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
    paddingHorizontal: 5,
    width: 325,
  },
  passwordPromptsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPasswordText: {
    color: colors.inputPromptColor,
    textDecorationLine: 'underline',
  },
  prefixInputView: {flexDirection: 'row', alignItems: 'center'},
  prefixText: {
    fontSize: 14,
    color: colors.inputPromptColor,
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    padding: 13.2,
  },
  prefixTextInput: {
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    color: 'black',
    padding: 10,
  },
});
