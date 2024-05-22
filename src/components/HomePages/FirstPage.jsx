import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';

export default function FirstPage() {
  return (
    <div className='lg:w-[90%] w-[95%] md:h-[41rem] sm:h-[34rem] h-[28rem] mx-auto pb-2 lg:px-[7rem] px-[2rem] border'>
      <div className='relative w-full'>
        <img
          src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1716305107/Abhilekhz/mdzickovdoy7j2fkti5p.png'
          alt=''
          srcset=''
          className='w-full md:h-[27rem] sm:h-[18rem] h-[15rem]'
        />
        <div className='absolute md:bottom-[-10rem] sm:bottom-[-13rem] bottom-[-11rem] left-0 px-[1rem] sm:px-[2rem] container1'>
          <img
            src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1716280107/Abhilekhz/ugu7aigjsszagmy8kqxe.jpg'
            title='Abhilekh Sarmah'
            alt='Software Developer'
            className='lg:w-[15rem] lg:h-[15rem] sm:w-[12rem] sm:h-[12rem] w-[8rem] h-[8rem] cursor-pointer rounded-full border-4 border-white shadow-xl'
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
