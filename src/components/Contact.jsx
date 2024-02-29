import React, { useState } from 'react';
// react animation library
import { motion } from 'framer-motion';
// import animation from variants.js file
import { fadeIn } from '../variants';
const Contact = () =>
{
  const [ email, setEmail ] = useState( '' );
  const [ name, setName ] = useState( '' );
  const [ message, setMessage ] = useState( '' );
  const Submit = async () =>
    {
        setButton("Please wait ...")
        if(email!=''){
            const response = await fetch( 'https://nodemailersameem-amjad.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    to: email,
                    subject: 'Contact',
                    text: message,
                } ),
            } );

            const result = await response.text();
            if ( result )
            {
              setButton( "Successfully send Email" );
            }
        }
        else
        {
          alert("Please fill this form") 
        }
        
    };
  return (
    <section id='contact' className='py-24'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row items-center'>
          {/* text */ }
          <motion.div
            variants={ fadeIn( 'right', 0.3 ) }
            initial='hidden' whileInView={ 'show' } viewport={ { once: false, amount: 0.3 } }
            className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-vide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br />togethor!</h2>
            </div>
          </motion.div>
          {/* form */ }

          <motion.form
            variants={ fadeIn( 'left', 0.3 ) }
            initial='hidden' whileInView={ 'show' } viewport={ { once: false, amount: 0.3 } }
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-10   p-2 items-center'>
            <input type="text" className='bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:boder-accent transition-all' typetext
              placeholder='Your Name' />
            <input type="text" className='bg-transparent border-b  outline-none w-full placeholder:text-white focus:boder-accent transition-all' typetext
              placeholder='Your Email' />
            <textarea className='bg-transparent border-b py-2 outline-none w-full placeholder:text-white focus:boder-accent  transition-all resize-none mb-4' name="" id="" cols="30" rows="8" placeholder='Your message' onChange={(e)=>{setMessage(e.target.message)}}></textarea>
            <button onClick={Submit} className='btn btn-lg animate-pulse '>Send Message</button>
          </motion.form>

        </div>
      </div>
    </section> );
};

export default Contact;
