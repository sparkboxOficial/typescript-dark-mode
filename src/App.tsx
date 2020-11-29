import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage'
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [darkMode, setdarkMode] = useState(false);

  const toggle = () => {
    setdarkMode(!darkMode);
  }

  return (
    <>
      <Navbar toggle={toggle} dark={darkMode}/>
      <HomePage dark={darkMode}/>
      <GlobalStyle dark={darkMode} />
    </>
  );
}

export default App;
