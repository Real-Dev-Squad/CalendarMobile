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
  screenInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 15,
  },
  screenInfoHeading: {
    color: colors.titleColor,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
  },
});
