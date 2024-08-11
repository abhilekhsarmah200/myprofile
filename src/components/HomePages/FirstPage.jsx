import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function FirstPage() {
  return (
    <div className='lg:w-[90%] w-[95%] md:h-[41rem] sm:h-[34rem] h-[28rem] mx-auto pb-2 lg:px-[7rem] px-[2rem] border'>
      <div className='relative w-full'>
        <Image
          width={500}
          height={500}
          src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1723353605/Abhilekhz/xpjynjxlt0dymfm5j2oy.webp?quality=auto&size=325w240h&format=webp'
          alt='software development'
          title='Abhilekh Sarmah Developer'
          className='w-full'
        />

        <div className='absolute md:bottom-[-10rem] sm:bottom-[-13rem] bottom-[-11rem] left-0 px-[1rem] sm:px-[2rem] container1'>
          <Image
            width={500}
            height={500}
            src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1723353605/Abhilekhz/y52mg9u03x4gkmxx6lht.webp?quality=auto&format=webp'
            title='Abhilekh Sarmah'
            alt='Software Developer'
            className='lg:w-[15rem] lg:h-[15rem] sm:w-[12rem] sm:h-[12rem] w-[5rem] h-[5rem] cursor-pointer rounded-full border-4 border-white shadow-xl'
          />
          <div className='w-full'>
            <h1 className='pt-4 md:text-3xl sm:text-xl text-[0.9rem]'>
              ABHILEKH SARMAH
            </h1>
            <div className='flex md:flex-row flex-col w-full md:justify-between md:items-center gap-5 pt-4'>
              <div className='flex gap-5 md:text-[1rem] text-[0.8rem] items-center'>
                <div className='flex items-center'>
                  <BusinessCenterIcon />
                  SOFTWARE DEVELOPER
                </div>
                <div className='flex items-center'>
                  <LocationOnIcon />
                  DIBRUGARH, ASSAM
                </div>
              </div>
              <Button
                className='py-2 lg:px-[3rem] px-[2rem] md:text-[1rem] text-[0.8rem] rounded-2xl'
                variant='contained'
                color='error'
                onClick={() => (window.location = '/contactme')}
                title='Contact Me'
              >
                CONTACT ME
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
