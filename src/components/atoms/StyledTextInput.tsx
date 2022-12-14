import { animated, useSpring } from '@react-spring/native';
import React, { ReactElement, useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

export default function StyledTextInput({
  label = 'Text Input',
  icon,
  secureTextEntry = false,
  style,
  text,
  onChangeText,
}: {
  label?: string,
  icon?: ReactElement,
  secureTextEntry?: boolean,
  style?: ViewStyle,
  text?: string,
  onChangeText?: (newText: string) => void,
}): ReactElement {
  const [value, setValue] = useState('');

  /** update value if text prop changes */
  useEffect(() => {
    if (text) setValue(text);
  }, [text]);

  /** updates value and uses callback if it exists */
  const updateValueHandler = (newValue: string) => {
    if (onChangeText) onChangeText(newValue);
    setValue(newValue);
  };

  const labelStyle = useSpring({
    config: {
      mass: 0.5,
      tension: 350,
    },
    to: {
      opacity: value ? 1 : 0,
      top: value ? 3 : -24,
    },
  });

  const containerStyle = useSpring({
    config: {
      mass: 0.5,
      tension: 350,
    },
    to: {
      paddingTop: value ? 6 : 0,
    },
  });

  return (
    <animated.View
      style={{
        ...containerStyle,
        ...styles.textInputContainer,
        ...style,
      }}
    >
      <animated.Text
        style={{
          ...labelStyle,
          ...styles.textInputLabel,
          left: icon ? 44 : 24,
        }}
      >
        {label}
      </animated.Text>
      <View style={styles.textInputIconWrapper}>
        {icon}
      </View>
      <TextInput
        style={{
          ...styles.textInputNativeInput,
          paddingLeft: icon ? 44 : 24,
        }}
        value={value}
        onChangeText={(newValue) => updateValueHandler(newValue)}
        placeholder={label}
        placeholderTextColor="#888888"
        secureTextEntry={secureTextEntry}
        selectionColor="#000"
      />
    </animated.View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    overflow: 'hidden',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#EEEEEE',
  },
  textInputIconWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 14,
    left: 12,
    fontSize: 20,
  },
  textInputLabel: {
    position: 'absolute',
    overflow: 'hidden',
    left: 24,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888888',
  },
  textInputNativeInput: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    fontSize: 16,
  },
});
