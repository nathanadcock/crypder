import React, { useContext } from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export function Text(props: DefaultText['props']) {
  const { theme } = useContext(ThemeContext);
  const { style, ...otherProps } = props;

  return (
    <DefaultText
      style={[{ color: theme.text }, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
}

export function View(props: DefaultView['props']) {
  const { theme } = useContext(ThemeContext);
  const { style, ...otherProps } = props;

  return (
    <DefaultView
      style={[{ backgroundColor: theme.background }, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
}
