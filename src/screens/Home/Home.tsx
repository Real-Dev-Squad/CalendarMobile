import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {commonStyles} from '../../assets/commonStyles';

function HomeScreen() {
  return (
    <SafeAreaView style={commonStyles.emailAuthScreenContainer}>
      <Text style={commonStyles.emailAuthScreenHeading}>Hello, user!</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
