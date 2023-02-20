import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    width: 311,
    rowGap: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  subHeading: {
    color: 'black',
    textAlign: 'center',
  },
  stepContainer: {paddingHorizontal: 40},
  progressContainer: {rowGap: 5},
  progressSteplineContainer: {flexDirection: 'row', columnGap: 15},
  progressStepline: {
    borderColor: colors.secondaryColor,
    borderWidth: 5,
    borderRadius: 10,
    height: 0,
  },
  stepText: {
    color: colors.placeHolderTxtColor,
    fontFamily: 'Inter',
    fontSize: 12,
  },
});
