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
                      Innovated and integrated responsive design elements for
                      mobile and desktop interfaces using HTML, CSS, and
                      JavaScript; enhanced user experience, leading to a 30%
                      rise in session durations and a 20% boost in customer
                      retention.
                    </li>
                    <li>
                      Planned and executed website development by converting
                      design mockups into functional web applications using
                      React.js and Next.js.
                    </li>
                    <li>
                      Utilized comprehensive debugging techniques to identify
                      and eliminate application bugs and errors prior to
                      publishing, ensuring high-quality deliverables.
                    </li>
                    <li>
                      Implemented functionalities such as, enabling users to
                      watch videos by clicking on timestamps, allowing the video
                      to continue playing from the selected time, similar to
                      YouTube, which improved user engagement and interactivity.
                    </li>
                    <li>
                      Designed, and developed REST APIs using Spring Boot to add
                      new features and improve existing functionalities,
                      enhancing the overall performance and capabilities of the
                      application.
                    </li>
                    <li>
                      Learned and adapted quickly to new technology and software
                      applications.
                    </li>
                    <li>
                      Mastered new software and methodologies within two weeks;
                      led to a 25% reduction in project turnaround time and
                      increased team productivity by 15%
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
