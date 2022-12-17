import React, { ReactElement, useMemo } from 'react';
import { animated, useSpring } from '@react-spring/native';
import { CurrencyBtc } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';
import { ExchangeType } from '../../types/Listings';

export default function MapMarker({
  active,
  exchangeType,
}: {
  active: boolean,
  exchangeType: ExchangeType,
}): ReactElement {
  const markerPuckColorStyle = (
    exchangeType === ExchangeType.BUYING_CRYPTO
      ? styles.markerPuckBuy
      : styles.markerPuckSell
  );

  const markerWrapperStyle = useSpring({
    config: {
      mass: 0.15,
      tension: 300,
    },
    to: {
      backgroundColor: active
        ? `${markerPuckColorStyle.borderColor}88`
        : `${markerPuckColorStyle.borderColor}00`,
    },
  });

  // eslint-disable-next-line arrow-body-style
  return useMemo(() => {
    return (
      <animated.View style={[styles.markerWrapper, markerWrapperStyle]}>
        <animated.View style={[styles.markerPuck, markerPuckColorStyle]}>
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
  },
  markerPuckBuy: {
    backgroundColor: '#292FA3',
    borderColor: '#5C62D6',
  },
  markerPuckSell: {
    backgroundColor: '#A37229',
    borderColor: '#D6A55C',
  },
});
