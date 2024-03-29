import React from 'react';
import style from '../components/style.module.css';
const Header = () => {
  return ( <header id='home' className='pt-8 pb-32 md:pb-24 sm:pb-28 lg:pb-16'>
    <div className="container mx-auto ">
      <div className="flex justify-between items-center ">
        <a href="#home" className={ `${ style.gradient_text }  text-center inline-block` } >
          <div className=' text-lg md:text-4xl lg:text-4xl'>
            Sameem 
          </div>
          {/* <br /> */}
          <div className='inline-flex items-end '>
            <hr className=" border-gray-400 lg:w-14 md:w-14 w-8 mr-2 pb-3"/>
            <p className="text-sm lg:text-lg md:text-md font-bold">The Developer</p>
            <hr className=" border-gray-400 lg:w-14 md:w-14 w-8 ml-2 pb-3"/>
          </div>
        </a>
        <button className='btn  btn-sm lg:btn-md animate-pulse  focus:ring-purple-400'> Work with me</button>
      </div>
    </div>
  </header> );
};


export default Header;
