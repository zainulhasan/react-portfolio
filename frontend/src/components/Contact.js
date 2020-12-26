import React from 'react';

const Contact = () => {
  return (
    <article className='my-28' id='contact'>
      <header className='text-2xl font-bold pt-10'>
        <h>Contact Me</h>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='flex flex-col md:flex-row justify-between md:items-end'>
        <div className='bg-gray px-6 py-8 rounded-lg shadow-lg justify-center my-7 md:w-6/12  '>
          <div>
            <p className='font-bold'>Theelipan Prabakar</p>
            <p className='font-thin'>Middletown, Connecticut</p>
            <a href='mailto: Theelipan@gmail.com' className='border-b-2 mt-3 inline-block border-gray-500'>
              Theelipan@gmail.com
            </a>
          </div>
          <p className='border-b-2 mt-3 inline-block border-gray-500'>Resume</p>
          <div className='flex flex-row flex-wrap mt-5 space-x-3 '>
            <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
              <a href='https://github.com/Deelip7' target='_blank'>
                <img src='./images/github.svg' alt='github' />
              </a>
            </div>
            <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
              <a href='https://www.linkedin.com/in/theelipan-prabakar-096437199/' target='_blank'>
                <img src='./images/linkedin.svg' alt='linkedin' />
              </a>
            </div>
            <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
              <a href='https://codepen.io/deelip7' target='_blank'>
                <img src='./images/codepen.svg' alt='codepen' />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-10 m-auto md:mt-0 max-w-xs md:max-w-md'>
          <img src='./images/rocket2.png' alt='' />
        </div>
      </div>
    </article>
  );
};

export default Contact;