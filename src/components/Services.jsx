import React from 'react';
// react animation library
import { motion } from 'framer-motion';
// import animation from variants.js file
import { fadeIn } from '../variants';
// import social media icons from react-icon
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda dolorum esse optio odio fugiat ',
    link: 'Learn more'
  },
  {
    name: 'Development',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda dolorum esse optio odio fugiat ',
    link: 'Learn more'
  },
  {
    name: 'Digital Marketing',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda dolorum esse optio odio fugiat ',
    link: 'Learn more'
  },
  {
    name: 'Product Branding',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda dolorum esse optio odio fugiat ',
    link: 'Learn more'
  },
]
const Services = () => {
  return ( <section id='services' className='section'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row lg:bg-services lg:bg-no-repeat bg-contain mix-blend-lighten'>
        {/* text */ }
        <motion.div
          variants={ fadeIn( 'right', 0.3 ) }
            initial='hidden' whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
          className='flex-1  lg:bg-bottom  lg:mb-0 mb-12'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16' >I'm a Freelancer Front-end Developer with over 2 years experience.</h3>
          <Link to='work'><button className='btn btn-sm animate-pulse border-2 border-purple-400 focus:ring-2 focus:ring-purple-400 '>See my work</button></Link>
          </motion.div>
        {/* Services */ }
        <motion.div className='flex-1'
          variants={ fadeIn( 'left', 0.5 ) }
            initial='hidden' whileInView={ 'show' }
            viewport={ { once: false, amount: 0.3 } }
        >
          {
            services.map( ( services, index ) =>
            {
              const { name, description, link } = services;
              return(
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={ index }>
                    <div className='max-w-[456px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 '>{name }</h4>
                    <p className='font-secondary leading-tight'>{ description }</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end animate-pulse border-purple-400 focus:ring-2 focus:ring-purple-400'>
                    {/* <a href="#" className='btn w-9 h-9 mb-[42px] flex border-2 justify-center items-center'>
                      <BsArrowUpRight/>
                    </a> */}
                    {/* <a href="#" className='text-gradient text-sm lg:text-lg'>
                      {link}
                    </a> */}
                    </div>
                  </div>
              )
            })
          }
        </motion.div>
      </div>
    </div>
  </section> );
};

export default Services;
