import React, { useState } from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Button, useMediaQuery } from '@mui/material';

export default function ThirdPage() {
  const [showDesc, setShowDesc] = useState(false);

  const showDescription = () => {
    setShowDesc(!showDesc);
  };

  const isSmallDevice = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      <div className='md:text-xl text-[1rem] flex gap-2 items-center mt-5 px-6'>
        <BusinessCenterIcon
          style={{
            fontSize: isSmallDevice ? '1.5rem' : '2rem',
            color: '#888888',
          }}
        />{' '}
        WORK HISTORY
      </div>
      <div className='lg:w-[70%] w-[95%] md:py-[4rem] py-[2rem] lg:mx-[4.5rem] mx-auto lg:px-[7rem] px-[2rem] border mt-5'>
        <div className='flex gap-6 items-start'>
          <div>
            <Button className='bg-[#e3f0fe]'>
              <BusinessCenterIcon
                style={{
                  fontSize: isSmallDevice ? '1.5rem' : '2rem',
                  color: '#3983fa',
                }}
              />
            </Button>
          </div>
          <div>
            <div className='md:text-[1.2rem] text-[1rem] font-bold'>
              Web Developer
            </div>
            <div className='md:text-[1rem] text-[0.8rem] mt-2'>
              At Quest Sustainability Solution
            </div>
            <div className='md:text-[1rem] text-[0.8rem]'>
              Banglore, Karnataka
            </div>
            <div className='md:text-[1rem] text-[0.8rem] text-[#d1d4db]'>
              2022 - 2024
            </div>
            <div
              className='md:text-[1rem] text-[0.8rem] mt-2 underline text-[#3a83fa] cursor-pointer'
              onClick={showDescription}
            >
              {showDesc ? '' : 'Show Description'}
            </div>
            {showDesc && (
              <div className='md:text-[1rem] text-[0.8rem] mt-2'>
                <hr></hr>
                <div className='mt-2'>
                  <ul className='list-disc md:pl-[4rem] pl-[1rem]'>
                    <li>
                      Planned website development, converting mockups into
                      usable web presence with REACT.js, NEXT.js, API and
                      Node.js coding.
                    </li>
                    <li>
                      Ran debugging tools to eliminate flaws and glitches prior
                      to publishing.
                    </li>
                    <li>
                      Built and styled new mobile-friendly websites,
                      transitioning legacy presentations to simultaneous
                      easy-to-use versions.
                    </li>
                    <li>
                      Coded websites using REACT, CSS, JavaScript and Tailwind
                      languages.
                    </li>
                  </ul>
                </div>
                <div
                  className='md:text-[1rem] text-[0.8rem] mt-2 underline text-[#3a83fa] cursor-pointer'
                  onClick={showDescription}
                >
                  {showDesc ? 'Hide Description' : ''}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
