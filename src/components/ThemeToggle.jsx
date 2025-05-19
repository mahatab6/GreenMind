// import React, { useState, useEffect } from 'react';

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.body.style.backgroundColor = '#151C1A';
//       document.body.style.color = '#ffffff';
//     } else {
//       document.body.style.backgroundColor = '#ffffff';
//       document.body.style.color = '#151C1A';
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
//     </button>
//   );
// };

// export default ThemeToggle;
