import { createContext, useContext } from 'react';
import { colors } from '../theme/colors';

const ThemeContext = createContext(null);

// Always returns twilight during development regardless of time
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ theme: 'twilight', colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
