// react animation library
import { motion } from 'framer-motion';
// import animation from variants.js file
import { fadeIn } from '../variants';
// import css from circle.module.css file from components folder
import style from '../components/circle.module.css';

// import useEffect from react
import React, { useEffect } from 'react';
// import social media icons from react-icon
import { FaGithub, FaFacebook, FaTwitter, FaDribbble, FaInstagram, FaYoutube, FaVimeoV, FaWhatsapp, FaStackOverflow,FaLinkedinIn } from 'react-icons/fa';
// import image from assets folder 
import image from '../assets/image.png';
// import useTypewriter function from react-simple-typewriter library
import { useTypewriter } from 'react-simple-typewriter';
// import Link from react-scroll
import { Link } from 'react-scroll';
const Banner = () =>
{
  // using useEffect function to create dynamically bubble 
  useEffect( () =>
  {
    let hasBubbles = false; // Flag to track if bubbles are currently visible

    // Function to create water bubbles
    function createBubbles ( count )
    {
      const bubbles = document.getElementById( 'bubbles' );
      const bubbleSpacing = 20; // Adjust the spacing between bubbles as desired

      for ( let i = 0; i < count; i++ )
      {
        const bubble = document.createElement( 'div' );
        bubble.innerHTML = '<div class="bubble" style=" box-shadow: 0 0 20px rgba(255, 105, 180, 0.6); animation: circleAnimation 1000ms ease-in-out infinite alternate; position: absolute; width: 25px; height: 25px; border-radius: 50%;  animation-name: bubbleAnimation; animation-duration: 1500ms; animation-timing-function: linear; animation-iteration-count: infinite;background: linear-gradient(to bottom, #4b0082, #ff69b4);"></div>';
        bubbles.appendChild( bubble );

        // Calculate bubble position based on index and spacing
        const bubblePosition = ( i - Math.floor( count / 2 ) ) * bubbleSpacing;

        // Randomly set animation duration
        const randomDuration = Math.random() * 4 + 6; // Increase the duration range for slower movement

        // Animate bubble
        bubble.animate(
          [
            { transform: `translateY(0px) translateX(${ bubblePosition }px)` },
            { transform: `translateY(-400px) translateX(${ bubblePosition }px)` }
          ],
          {
            duration: randomDuration * 1000, // Convert to milliseconds
            easing: 'linear',
            iterations: Infinity
          }
        );
      }

      hasBubbles = true; // Set flag to indicate bubbles are currently visible
    }

    // Create bubbles at regular intervals only if no bubbles are currently visible
    const intervalId = setInterval( () =>
    {
      if ( hasBubbles === false )
      {
        const bubbleCount = Math.floor( Math.random() * 2 ) + 2; // Generate random count between 2 and 3
        createBubbles( bubbleCount );
      }
    }, 3000 ); // Adjust the interval as needed

    return () =>
    {
      clearInterval( intervalId ); // Clear the interval when the component is unmounted
    };
  }, [] );

  // useTypewriter function is used
  const [ typeEffect ] = useTypewriter( {
    words: [ 'Developer', 'Designer', 'Youtuber' ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,

  } );
  // return the Banner section
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto ">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-around ' >
          {/* text */ }
          <div className='flex-1 lg:justify-center text-center font-secondary lg:text-left' >
            <motion.h1 variants={ fadeIn( 'up', 0.3 ) }
              initial='hidden' whileInView={ 'show' }
              viewport={ { once: false, amount: 0.7 } } className='text-[35px] font-bold leading-[0.8]  lg:text-[50px] '>
              SAMEEM<span className="lg:ml-2"> AMJAD</span>
            </motion.h1>
            <motion.div variants={ fadeIn( 'up', 0.4 ) }
              initial='hidden' whileInView={ 'show' }
              viewport={ { once: false, amount: 0.7 } } className='mb-6 mt-8 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1] '>
              <span >I am a {/* <TypeAnimation/> */ } <span className='text-accent '>{ typeEffect }</span></span>
            </motion.div>
            <motion.p variants={ fadeIn( 'up', 0.5 ) }
              initial='hidden' whileInView={ 'show' } viewport={ { once: false, amount: 0.7 } } className='mb-8 max-w-lg mx-auto lg:mx-0'>Hey, I'm Sameem. I've more than 2 years of experience in Website & Mobile app development along with UI/UX Designing and have been serving the best quality products.  I'm a hard-working and dedicated person. and my first & top priority is my client satisfaction. Feel free to contact me, Cheers!</motion.p>
            <motion.div variants={ fadeIn( 'up', 0.6 ) }
              initial='hidden' whileInView={ 'show' }
              viewport={ { once: false, amount: 0.7 } } className='flex mx-auto items-center max-w-max gap-x-6 mb-12 lg:mx-0'>
              <Link to='contact'><button className='btn btn-lg font-secondary text-[18px] animate-pulse  focus:ring-purple-400'>Contact me</button></Link>
              <a href=''  rel="noopener noreferrer"  className='text-gradient btn-link font-secondary text-[18px] animate-pulse focus:ring-2 focus:ring-purple-400 '>My Portfolio</a>
            </motion.div>
            <motion.div variants={ fadeIn( 'up  ', 0.7 ) }
              initial='hidden' whileInView={ 'show' }
              viewport={ { once: false, amount: 0.7 } } className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/Sameem-Amjad' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaGithub />
              </a>
              <a href='https://pk.linkedin.com/in/sameem-amjad-336bb428b' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaLinkedinIn />
              </a>
              <a href='https://web.facebook.com/profile.php?id=100060922623757' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaFacebook />
              </a>
              <a href='https://www.youtube.com/@sameemamjad418' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaYoutube />
              </a>
              <a href='https://www.instagram.com/amjadsameem/?igsh=MXJqb3Y1ZmY1aDJjaA%3D%3D' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaInstagram />
              </a>
              <a href='https://dribbble.com/SamiMirza' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaDribbble />
              </a>
              <a href='https://twitter.com/AmjadSameem' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaTwitter />
              </a>
              <text  className='animate-pulse'>
                <FaWhatsapp />
              </text>
              <a href='https://vimeo.com/user203354682' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaVimeoV />
              </a>
              <a href='https://stackoverflow.com/users/22164253/sameem-amjad' target='_blank' rel="noopener noreferrer" className='animate-pulse'>
                <FaStackOverflow />
              </a>
            </motion.div>
          </div>
          {/* image  */ }
          <div className='lg:flex flex-1 mt-1 lg:justify-center '>
            <motion.div
              variants={ fadeIn( 'down', 0.5 ) }
              initial='hidden' whileInView={ 'show' }
              viewport={ { once: false, amount: 0.7 } }
              className={ `${ style.container }` }>
              <div id="circle" className={ `${ style.circle }` }>
                <img src={ image } className={ `${ style.img }` } alt='bg'></img>
              </div>
              <div id="bubbles" className={ `${ style.bubbles }` }></div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
