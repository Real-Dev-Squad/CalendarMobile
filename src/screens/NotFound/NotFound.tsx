import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../../assets/commonStyles';
import {colors} from '../../constants/colors';

function NotFound() {
  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={commonStyles.emailAuthScreenHeading}>HapDay</Text>
      <View style={commonStyles.screenInfoContainer}>
        <Text style={commonStyles.screenInfoHeading}>
          Oops! This screen does not exist
        </Text>
        <Text style={{color: colors.subtitleTextColor}}>
          Go back or open app again
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default NotFound;
