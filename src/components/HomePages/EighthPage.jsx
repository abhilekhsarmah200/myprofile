import React, { useState } from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import { Interets } from '../../utils/homepage.data';
import { RadioButtonChecked } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';

export default function EighthPage() {
  const isSmallDevice = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      <div className='md:text-xl text-[1rem] flex gap-2 items-center mt-5 px-6'>
        <FlagIcon
          style={{
            fontSize: isSmallDevice ? '1.5rem' : '2rem',
            color: '#888888',
          }}
        />{' '}
        INTERESTS
      </div>
      <div className='lg:w-[90%] w-[95%] md:py-[4rem] py-[2rem] mx-auto lg:px-[7rem] px-[2rem] border my-5'>
        <div className='grid grid-cols-3'>
          {Interets.map((item, index) => (
            <div
              key={index}
              className='flex gap-2 md:text-[1rem] text-[0.8rem] items-center py-2'
            >
              <RadioButtonChecked
                type='radio'
                sx={{
                  color: '#3983fa',
                  fontSize: isSmallDevice ? '1rem' : '1.2rem',
                }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
