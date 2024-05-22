import React, { useState } from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import { Projects } from '../../utils/homepage.data';
import { useMediaQuery } from '@mui/material';

export default function SeventhPage() {
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
        PROJECTS
      </div>
      <div className='lg:w-[90%] w-[95%] md:py-[4rem] py-[2rem] mx-auto lg:px-[7rem] px-[2rem] border mt-5'>
        <div className='flex flex-col gap-4'>
          {Projects.map((item, index) => (
            <div key={index}>
              <div className='font-bold md:text-xl text-[1rem] mb-2'>
                {item?.title}-
              </div>
              {item?.descriptions?.map((item) => (
                <ul
                  key={index}
                  className='pl-[3rem] md:text-[1rem] text-[0.8rem] list-disc'
                >
                  <li>{item}</li>
                </ul>
              ))}
              <div className='mb-2 md:text-[1rem] text-[0.8rem] flex gap-2'>
                Github:
                <a
                  className='underline break-all text-[#3983fa]'
                  target='_blank'
                  href={item?.GithubLink}
                >
                  {item?.GithubLink}
                </a>
              </div>
              <div className='mb-2 md:text-[1rem] text-[0.8rem] flex gap-2'>
                Website:
                <a
                  className='underline break-all text-[#3983fa]'
                  href={item?.websiteLink}
                  target='_blank'
                >
                  {item?.websiteLink}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
