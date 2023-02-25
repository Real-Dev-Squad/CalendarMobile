import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './HeadingAndProgressStep.styles';

export default function HeadingAndProgressStep({step}: {step: number}) {
  const currentStepWidth = '44%';
  const otherStepWidth = '24%';

  const step1LineWidth = step === 1 ? currentStepWidth : otherStepWidth;
  const step2LineWidth = step === 2 ? currentStepWidth : otherStepWidth;
  otherStepWidth;
  const step3LineWidth = step === 3 ? currentStepWidth : otherStepWidth;
  otherStepWidth;

  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Welcome to HapDay</Text>
        <Text style={styles.subHeading}>
          Tell us a bit about yourself, we will need this to get your profile
          setup. You&apos;ll be able to edit this later.
        </Text>
      </View>

      <View style={styles.stepContainer}>
        <View style={styles.progressContainer}>
          <Text style={styles.stepText}>Step {step}</Text>
          <View style={styles.progressSteplineContainer}>
            <View style={{...styles.progressStepline, width: step1LineWidth}} />
            <View style={{...styles.progressStepline, width: step2LineWidth}} />
            <View style={{...styles.progressStepline, width: step3LineWidth}} />
          </View>
        </View>
      </View>
    </View>
  );
}
