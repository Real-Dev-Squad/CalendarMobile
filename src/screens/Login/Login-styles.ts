import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heading: {
    color: colors.primaryColor,
    fontFamily: 'Modak-Regular',
    lineHeight: 48,
    fontSize: 40,
  },
});
