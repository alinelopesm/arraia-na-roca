import React from 'react';
import { useTheme } from '@/context/themeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 md:p-3 lg:p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggleButton;

