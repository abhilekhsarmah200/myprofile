// pages/myresume.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Head from 'next/head';

const MyResume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className='pdf-container mx-auto'>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`}
        >
          <Viewer
            fileUrl='/Abhilekh_Sarmah_Resume.pdf'
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
      <style jsx>{`
        .pdf-container {
          width: 80%;
          height: 100vh;
        }

        @media (max-width: 600px) {
          .pdf-container {
            height: 80vh; /* Adjust height for smaller devices */
          }
        }
      `}</style>
    </>
  );
};

export default MyResume;
