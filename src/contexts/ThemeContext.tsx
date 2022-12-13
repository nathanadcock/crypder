import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

interface ThemeStyleProperties {
  [property: string]: string;
}

/** represents the map containing all themes and their data */
interface ThemeMap {
  [themeKey: string]: ThemeStyleProperties;
}

const colors: ThemeMap = {
  light: {
    text: '#000',
    background: '#FFF',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,

    textInputBackgroundColor: '#E4E4E4',
    textInputPlaceholderColor: '#666',
    textInputTextColor: '#000',

    buttonBackgroundColor: '#000',
    buttonTextColor: '#fff',
  },
  dark: {
    text: '#FFF',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,

    textInputBackgroundColor: '#222',
    textInputPlaceholderColor: '#CCC',
    textInputTextColor: '#FFF',

    buttonBackgroundColor: '#FFF',
    buttonTextColor: '#000',
  },
};

/** the information provided by the context */
interface ThemeContextValue {
  theme: ThemeStyleProperties;
  currentTheme: string
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}

/** initialize context */
export const ThemeContext = createContext<ThemeContextValue>(
  {} as ThemeContextValue,
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const appContextValue = {
    theme: colors[currentTheme],
    currentTheme,
    setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={appContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
