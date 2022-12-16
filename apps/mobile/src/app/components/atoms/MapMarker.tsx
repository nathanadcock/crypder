import { animated, useSpring } from '@react-spring/native';
import { CurrencyBtc } from 'phosphor-react-native';
import React, { ReactElement, useMemo } from 'react';
import { StyleSheet } from 'react-native';

export default function MapMarker({
  active,
}: {
  active: boolean,
}): ReactElement {
  const markerWrapperStyle = useSpring({
    config: {
      mass: 0.15,
      tension: 300,
    },
    to: {
      backgroundColor: active ? '#5c62d688' : '#5c62d600',
    },
  });

  // eslint-disable-next-line arrow-body-style
  return useMemo(() => {
    return (
      <animated.View style={[styles.markerWrapper, markerWrapperStyle]}>
        <animated.View style={[styles.markerPuck]}>
          <CurrencyBtc size={16} color="#FFFFFF" />
        </animated.View>
      </animated.View>
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
}

const styles = StyleSheet.create({
  markerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: 36,
    borderRadius: 100,
    margin: 1,
  },
  markerPuck: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#5c62d6',
    backgroundColor: '#2b32ad',
  },
});
