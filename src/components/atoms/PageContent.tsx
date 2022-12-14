import React, { ReactElement, ReactNode } from 'react';
import { animated, useSpring } from '@react-spring/native';
import { StyleSheet } from 'react-native';
import { ThemedCanvas } from './Themed';

export default function PageCanvas({
  children,
}: {
  children: ReactNode,
}): ReactElement {
  /** page container slide-up animation */
  const containerStyle = useSpring({
    config: {
      mass: 0.15,
      tension: 300,
    },
    from: {
      opacity: 0,
      top: 1000,
    },
    to: {
      opacity: 1,
      top: 0,
    },
  });

  return (
    <animated.View style={{ ...styles.container, ...containerStyle }}>
      <ThemedCanvas style={styles.container}>
        {children}
      </ThemedCanvas>
    </animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
