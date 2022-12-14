import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';

export function ThemedMainText(props: Text['props']) {
  const { theme } = useContext(ThemeContext);
  const { style, ...otherProps } = props;

  return (
    <Text
      style={[{ color: theme.mainTextColor }, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
}

export function ThemedSubText(props: Text['props']) {
  const { theme } = useContext(ThemeContext);
  const { style, ...otherProps } = props;

  return (
    <Text
      style={[{ color: theme.subTextColor }, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
}

export function ThemedAccentText(props: Text['props']) {
  const { theme } = useContext(ThemeContext);
  const { style, ...otherProps } = props;

  return (
    <Text
      style={[{ color: theme.accentTextColor }, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
}

export function ThemedCanvas(props: View['props']) {
  const { theme } = useContext(ThemeContext);
  const { style, ...otherProps } = props;

  return (
    <View
      style={[{ backgroundColor: theme.canvasColor }, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
}
