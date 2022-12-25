import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

export const commonStyles = StyleSheet.create({
  emailAuthScreenContainer: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emailAuthScreenHeading: {
    color: colors.primaryColor,
    fontFamily: 'Modak-Regular',
    lineHeight: 48,
    fontSize: 40,
  },
});
