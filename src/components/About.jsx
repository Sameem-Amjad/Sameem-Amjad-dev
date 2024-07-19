//react 
import React from 'react';
// react counter
import CountUp from 'react-countup';
// react use in view in which whenever user clicks on about section the animation will occur and element will be appear to the section in a animation.
import { useInView } from 'react-intersection-observer';
// import animation from variants.js file
import { fadeIn } from '../variants';
// react animation library
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const About = () =>
{
  // only take 0.5 seconds to render elements
  const [ ref, inView ] = useInView( {
    threshold: 0.5,
  } );
  // return the about section
  return (
    <section id='about' className='section' ref={ ref }>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-36 lg:gap-y-0 '>
          {/* image */}
          <motion.div variants={ fadeIn( 'right', 0.3 ) } initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.3}}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top  "></motion.div>
          {/* Text section */}
          <motion.div variants={ fadeIn( 'left', 0.5 ) }
            initial='hidden' whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
            className='flex-1 text-center  lg:text-left' >
            {/* about me */ }
            <div>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4 lg:mx-0'>I'm a Freelancer Front-end Developer with over 4 years experience.</h3>
            <p className='mb-8 lg:mx-0'>
             I'm known for building stunning and captivating Websites & Mobile applications for both businesses and individuals and also I have a team of the best & experienced developers and designers I would love to help you with your desire Website & Mobile applications project.
            </p>
            </div>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12 ' >
              <div className='ml-10 lg:ml-0' >
                <div className='text-[40px] text-tertiary animate-pulse text-gradient p-2 
                border-purple-400 focus:ring-2 focus:ring-purple-400' >
                  {/* <h1>{useCountUp({ end: 13, duration: 3 }) }</h1> */ }
                  { inView ? <CountUp end={ 4 } duration={ 5 } /> : null }
                </div>
                <div className='font-secondary text-sm tracking-[2px]'>Years of <br />Experience</div>
              </div>
              <div className='ml-10 lg:ml-0'>
                <div className='text-[40px] text-tertiary animate-pulse text-gradient p-2
                border-purple-400 focus:ring-2 focus:ring-purple-400' >
                  {/* <h1>{useCountUp({ end: 13, duration: 3 }) }</h1> */ }
                  { inView ? <CountUp end={ 46 } duration={ 5 } /> : null }
                  +
                </div>
                <div className='font-secondary text-sm tracking-[2px]'>Project <br />Completion</div>
              </div>
              <div className='ml-10 lg:ml-0'>
                <div className='text-[40px] text-tertiary animate-pulse text-gradient p-2
                border-purple-400 focus:ring-2 focus:ring-purple-400' >
                  {/* <h1>{useCountUp({ end: 13, duration: 3 }) }</h1> */ }
                  { inView ? <CountUp end={ 50 } duration={ 5 } /> : null }
                  +
                </div>
                <div className='font-secondary text-sm tracking-[2px]'>Client <br />Satisfied</div>
              </div>
            </div>
            <div>
              <div className='flex mx-auto items-center max-w-max gap-x-6 mb-12 lg:mx-0'>
              <Link to='contact'><button className='btn btn-lg font-secondary text-[18px] animate-pulse  focus:ring-purple-400'>Contact me</button></Link>
              <a href="#" className='text-gradient btn-link font-secondary text-[18px] animate-pulse focus:ring-2 focus:ring-purple-400 '>My Portfolio</a>
              </div >
                
              </div>
          
          </motion.div>
        </div>
    </div>
  </section> );
};

export default About;
