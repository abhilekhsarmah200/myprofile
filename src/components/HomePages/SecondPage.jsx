import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, useMediaQuery } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function SecondPage() {
  const isSmallDevice = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      <div className='md:text-xl text-[1rem] flex gap-2 items-center mt-5 px-6'>
        <PersonIcon
          style={{
            fontSize: isSmallDevice ? '1.5rem' : '2rem',
            color: '#888888',
          }}
        />{' '}
        SUMMARY
      </div>
      <div className='lg:w-[90%] w-[95%] md:py-[4rem] py-[2rem] mx-auto lg:px-[7rem] px-[2rem] border mt-5 md:text-[1rem] text-[0.8rem]'>
        Aspiring and motivated Frontend Developer with 1.9 years of experience
        in creating responsive and visually appealing web applications.
        Dedicated to enhancing user experiences through innovative design and
        cutting- edge technologies. Developed websites using Reactjs, Nextjs
        frameworks.
      </div>
    </div>
  );
}
