import React, { useState, useEffect } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";



const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#151C1A';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#151C1A';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
            <button onClick={toggleTheme} className="cursor-pointer">
                {theme === 'light' ? (
                    <MdDarkMode className='hover:text-gray-700 hover:scale-110 transition-transform duration-300' size={25} />
                ) : (
                    <CiLight className='hover:text-yellow-400 hover:scale-110 transition-transform duration-300' size={25} />
                )}
            </button>

  );
};

export default ThemeToggle;
