import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './Welcome.styles';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Welcome to HapDay</Text>
        <Text style={styles.subHeading}>
          Tell us a bit about yourself, we will need this to get your profile
          setup. You&apos;ll be able to edit this later.
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
