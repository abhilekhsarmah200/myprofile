import React, { useState } from 'react';
import { Button, useMediaQuery } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function FourthPage() {
  const isSmallDevice = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      <div className='md:text-xl text-[1rem] flex gap-2 items-center mt-5 px-6'>
        <SchoolIcon
          style={{
            fontSize: isSmallDevice ? '1.5rem' : '2rem',
            color: '#888888',
          }}
        />{' '}
        EDUCATION
      </div>
      <div className='lg:w-[70%] w-[95%] md:py-[4rem] py-[2rem] lg:mx-[4.5rem] mx-auto lg:px-[7rem] px-[2rem] border mt-5'>
        <div className='flex gap-6 items-start'>
          <div>
            <Button className='bg-[#e3f0fe]'>
              <SchoolIcon
                style={{
                  fontSize: isSmallDevice ? '1.5rem' : '2rem',
                  color: '#3983fa',
                }}
              />
            </Button>
          </div>
          <div>
            <div className='md:text-[1.2rem] text-[1rem] font-bold'>
              Bachelor of Science - Information Technology
            </div>
            <div className='md:text-[1rem] text-[0.8rem] mt-2'>
              Jorhat Institute of Science And Technology
            </div>
            <div className='md:text-[1rem] text-[0.8rem]'>
              Sotai, JORHAT (ASSAM)
            </div>
            <div className='md:text-[1rem] text-[0.8rem] text-[#d1d4db]'>
              2018 - 2021
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[70%] w-[95%] md:py-[4rem] py-[2rem] lg:mx-[4.5rem] mx-auto lg:px-[7rem] px-[2rem] border mt-5'>
        <div className='flex gap-6 items-start'>
          <div>
            <Button className='bg-[#e3f0fe]'>
              <SchoolIcon
                style={{
                  fontSize: isSmallDevice ? '1.5rem' : '2rem',
                  color: '#3983fa',
                }}
              />
            </Button>
          </div>
          <div>
            <div className='md:text-[1.2rem] text-[1rem] font-bold'>
              Software Engineering Course - Full Stack Web Development( MERN )
            </div>
            <div className='md:text-[1rem] text-[0.8rem] mt-2'>AttainU</div>
            <div className='md:text-[1rem] text-[0.8rem]'>Online</div>
            <div className='md:text-[1rem] text-[0.8rem] text-[#d1d4db]'>
              2021 - 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
