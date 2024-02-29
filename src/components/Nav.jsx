import React from 'react';
import { FaHome, FaUserTie } from "react-icons/fa";
import { Link } from 'react-scroll';
import { BsFillClipboardDataFill, BsBriefcaseFill, BsChatSquareText } from "react-icons/bs";
import { useTheme } from '../utils/themeContext';
import darkMode from '../assets/darkMode.png'
import lightMode from '../assets/lightMode.png'

const Nav = () =>
{
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className='fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center '>
          <Link to='home' activeClass='active animate-pulse   focus:ring-purple-400' smooth={ true } spy={ true } className='cursor-pointer h-[50px] w-[50px] flex items-center justify-center '>
            <FaHome />
          </Link>
          <Link to='about' activeClass='active animate-pulse  focus:ring-purple-400 ' smooth={ true } spy={ true } className='cursor-pointer h-[50px] w-[50px] flex items-center justify-center'>
            <FaUserTie />
          </Link>
          <Link to='services' activeClass='active animate-pulse  focus:ring-purple-400 ' smooth={ true } spy={ true } className='cursor-pointer h-[50px] w-[50px] flex items-center justify-center'>
            <BsFillClipboardDataFill />
          </Link>
          <Link to='work' activeClass='active animate-pulse  focus:ring-purple-400 ' smooth={ true } spy={ true } className='cursor-pointer h-[50px] w-[50px] flex items-center justify-center '>
            <BsBriefcaseFill />
          </Link>
          <Link to='contact' activeClass='active animate-pulse  focus:ring-purple-400 ' smooth={ true } spy={ true } className='cursor-pointer h-[50px] w-[50px] flex items-center justify-center'>
            <BsChatSquareText />
          </Link>
          <button onClick={ toggleDarkMode } className='cursor-pointer h-[50px] w-[50px] flex items-center justify-center'>
            { isDarkMode ? <img src={darkMode} alt="" /> : <img src={lightMode} alt="" /> }
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
