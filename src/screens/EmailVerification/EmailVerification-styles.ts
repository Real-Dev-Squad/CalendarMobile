import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  subtitleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  subtitleBoldText: {
    color: colors.subtitleTextColor,
    fontSize: 12,
    fontWeight: 'bold',
    paddingRight: 2,
  },
  subtitleNormalText: {
    color: colors.subtitleTextColor,
    fontSize: 12,
    paddingRight: 2,
  },
  otpInputsContainer: {display: 'flex', flexDirection: 'row', margin: 0},
  otpInputContainStyles: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 8,
    margin: 8,
    width: 50,
  },
  otpInputStyles: {
    color: '#1F1F1F',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  verificationPromptContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 45,
    paddingBottom: 30,
    paddingTop: 15,
  },
  verificationPromptText: {
    color: colors.inputPromptColor,
    paddingRight: 2,
    fontSize: 12,
  },
  resendOtpButton: {
    color: colors.inputPromptColor,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});
