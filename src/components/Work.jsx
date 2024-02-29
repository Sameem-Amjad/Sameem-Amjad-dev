import React from 'react';
// react animation library
import { motion } from 'framer-motion';
// import animation from variants.js file
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
//img
import img1 from '../assets/portfolio-img1.webp';
import img2 from '../assets/portfolio-img2.webp';
import img3 from '../assets/portfolio-img3.webp';
const Work = () => {
  return (<section id='work' className='section'>
    <div className="container mx-auto">
      <div className='flex flex-row lg:flex-row gap-x-5'>
        <motion.div
           variants={ fadeIn( 'right', 0.3 ) }
            initial='hidden' whileInView={ 'show' }
            viewport={ { once: false, amount: 0.7 } }
          className='flex-1 flex flex-col gap-y-4 justify-between pt-1 mb-10 lg:mb-0 '>
          {/* text */}
          <div  className='group relative overflow-hidden pb-4'>
            <h2 className='h2 text-accent leading-tight'>
              My latest
              <br />Work
            </h2>
            <p className='max-w-sm mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium inventore error laudantium sit architecto id ut tenetur animi, fugiat incidunt magnam optio facere exercitationem voluptates?</p>
            <Link to="list" target='_blank'>
            <button className='btn btn-sm animate-pulse' >View all projects</button></Link>
          </div>
          {/* image */}
          <div className='flex-1 group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */ }
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img  */ }
            <img className='group-hover:scale-125 h-full transition-all duration-500' src={ img1 } alt="" />
            <div className='absolute -bottom-full group-hover:bottom-24 left-12 transition-all duration-500 z-50'><span className='text-gradient'>MERN Development</span></div>
            <div className='absolute left-12 -bottom-full group-hover:bottom-14 transition-all duration-700 z-50'>
              <a href="https://the-make-up-marvels.vercel.app/" target='_blank'><span className='text-3xl text-white'>The Make-Up Marvels</span></a>
            </div>
          </div>
        </motion.div>
        <motion.div
           variants={ fadeIn( 'left', 0.3 ) }
            initial='hidden' whileInView={ 'show' }
            viewport={ { once: false, amount: 0.7 } }
          className='flex-1 flex flex-col gap-y-4 justify-between '>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */ }
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img  */ }
            <img className='group-hover:scale-125 transition-all duration-500' src={ img2 } alt="" />
            <div className='absolute -bottom-full group-hover:bottom-24 left-12 transition-all duration-500 z-50'><span className='text-gradient'>VITE REACT WITH ETHERS</span></div>
            <div className='absolute left-12 -bottom-full group-hover:bottom-14 transition-all duration-700 z-50'>
              <a href="https://truckingempire.surge.sh/" target='_blank'><span className='text-3xl text-white'>WEB 3 Trucking Empire</span></a>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */ }
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img  */ }
            <img className='group-hover:scale-125 transition-all duration-500' src={ img3 } alt="" />
            <div className='absolute -bottom-full group-hover:bottom-24 left-12 transition-all duration-500 z-50'><span className='text-gradient'>MERN PROJECT</span></div>
            <div className='absolute left-12 -bottom-full group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Stock Sentiment Analyzer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>)
};

export default Work;
