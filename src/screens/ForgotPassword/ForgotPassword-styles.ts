import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  screenInfoContainer: {display: 'flex', alignItems: 'center', padding: 30},
  screenInfoHeading: {
    color: colors.titleColor,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
  },
});
