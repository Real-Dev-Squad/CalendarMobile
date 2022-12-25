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
    color: colors.forgotPasswordTextColor,
    textDecorationLine: 'underline',
  },
});
