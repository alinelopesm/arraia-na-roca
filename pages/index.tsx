import ThemeToggleButton from '../components/ThemeToggleButton';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Hello, Next.js with TypeScript!</h1>
      <ThemeToggleButton />
    </div>
  );
};

export default Home;
