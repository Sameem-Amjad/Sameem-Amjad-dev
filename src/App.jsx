import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { useTheme } from './utils/themeContext';

const App = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? 'bg-black  overflow-hidden min-h-full' : 'bg-site bg-no-repeat bg-cover overflow-hidden min-h-full'}>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
