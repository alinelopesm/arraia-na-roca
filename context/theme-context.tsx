import { ThemeContextProps } from '@/types/theme';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [ themePallete, setThemePallete ] = useState<Theme>('dark');

  const savedThemeStorage = (item: Theme) => {
    setThemePallete(item);
    document.documentElement.classList.add(item);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;

    if (savedTheme) {
      savedThemeStorage(savedTheme);
      return;
    }
    savedThemeStorage('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = themePallete === 'light' ? 'dark' : 'light';
    setThemePallete(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(themePallete);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themePallete, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemePaletteMode = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
