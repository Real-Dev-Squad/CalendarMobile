import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './HeadingAndProgressStep.styles';

export default function HeadingAndProgressStep({
  step,
  step1LineWidth,
  step2LineWidth,
  step3LineWidth,
}: {
  step: number;
  step1LineWidth: string;
  step2LineWidth: string;
  step3LineWidth: string;
}) {
  return (
    <>
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
    </>
  );
}
