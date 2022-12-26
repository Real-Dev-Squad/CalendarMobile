import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {display: 'flex', flexDirection: 'row', paddingTop: 10},
  // TODO: replace padding with gap after gap after RN 0.71.0
  prompt: {color: 'black', paddingHorizontal: 5},
  lintText: {
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
