import React from 'react';
import { useThemePaletteMode } from '@/context/theme-context';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggleButton: React.FC = () => {
  const { themePallete, toggleTheme } = useThemePaletteMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 md:p-2 lg:p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      aria-label="Toggle theme"
    >
      {themePallete === 'light' ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggleButton;

