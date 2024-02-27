import React from 'react';
import style from '../components/style.module.css';
const Header = () => {
  return ( <header id='home' className='pt-8 pb-64 lg:pb-0'>
    <div className="container mx-auto ">
      <div className="flex justify-between items-center ">
        <a href="#home" className={ `${ style.gradient_text }  text-center inline-block` } >
          <div className=' text-4xl md:text-4xl lg:text-4xl'>
            Sameem 
          </div>
          {/* <br /> */}
          <div className='inline-flex items-end '>
            <hr className=" border-gray-400 w-14 mr-2 pb-3"/>
            <p className="text-lg font-bold">The Developer</p>
            <hr className=" border-gray-400 w-14 ml-2 pb-3"/>
          </div>
        </a>
        <button className='btn btn-sm lg:btn-md animate-pulse border-2 border-purple-400 focus:ring-2 focus:ring-purple-400 '> Work with me</button>
      </div>
    </div>
  </header> );
};


export default Header;
