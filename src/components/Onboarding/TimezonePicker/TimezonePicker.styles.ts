import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  label: {
    color: 'black',
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '500',
  },
  pickerContainer: {gap: 10},
  dropdown: {
    borderWidth: 0,
    padding: 0,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 1,
    width: '100%',
    borderColor: colors.inputBorderColor,
  },
  listItemContainer: {marginVertical: 12},
});
