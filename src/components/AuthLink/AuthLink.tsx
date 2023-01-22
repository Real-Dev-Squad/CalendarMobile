import React from 'react';
import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import {styles} from './AuthLink-styles';

function AuthLink({
  prompt,
  linkText,
  onPress,
}: {
  prompt: string;
  linkText: string;
  onPress: (event: GestureResponderEvent) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{prompt}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.lintText}>{linkText}</Text>
      </Pressable>
    </View>
  );
}

export default AuthLink;
