import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    // NOTE: gap will be available from RN 0.71.0
    // gap: 2,
  },
  heroTitle: {
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 48,
    fontFamily: 'Modak-Regular',
    paddingTop: 20,
  },
  heroSubtitle: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
  },
});
