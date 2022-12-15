import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface ThemeStyleProperties {
  [property: string]: string;
}

/** represents the map containing all themes and their data */
interface ThemeMap {
  [themeKey: string]: ThemeStyleProperties;
}

const colors: ThemeMap = {
  light: {
    mainTextColor: '#000000',
    subTextColor: '#666666',
    accentTextColor: '#DD814D',
    canvasColor: '#FFFFFF',
  },
  dark: {
    mainTextColor: '#FFFFFF',
    subTextColor: '#AAAAAA',
    accentTextColor: '#6F4DDD',
    canvasColor: '#000000',
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
