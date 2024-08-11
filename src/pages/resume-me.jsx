import React, { lazy } from 'react';
const MyResume = lazy(() => import('../components/MyResume/MyResume'));

import Head from 'next/head';

export default function resume() {
  return (
    <div>
      <Head>
        <title>{`Abhilekh Sarmah - Resume`}</title>
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`www.abhilekhsarmah.me/resume-me`} />
        <meta
          name='title'
          property='og:title'
          content='Abhilekh Sarmah Resume'
        />
        <meta
          name='description'
          property='og:description'
          content={`I am a Software Developer`}
        />
        <meta
          property='og:image'
          content={
            'https://res.cloudinary.com/dwkajs0ca/image/upload/v1716280107/Abhilekhz/ugu7aigjsszagmy8kqxe.jpg'
          }
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='keywords'
          content='abhilekh sarmah, Abhilekh Sarmah, developer, Software Developer, abhilekhsarmah, Abhilekh Sarmah Resume'
        />
      </Head>
      <div className='md:pt-[10rem] pt-[7rem] md:pb-[7rem] pb-[3rem]'>
        <MyResume />
      </div>
    </div>
  );
}
