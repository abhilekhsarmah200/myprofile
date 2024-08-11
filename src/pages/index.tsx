import { Inter } from 'next/font/google';
import FirstPage from '../components/HomePages/FirstPage';
import SecondPage from '../components/HomePages/SecondPage';
import ThirdPage from '../components/HomePages/ThirdPage';
import FourthPage from '../components/HomePages/FourthPage';
import FifthPage from '../components/HomePages/FifthPage';
import SixthPage from '../components/HomePages/SixthPage';
import SeventhPage from '../components/HomePages/SeventhPage';
import EighthPage from '../components/HomePages/EighthPage';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`Abhilekh Sarmah`}</title>
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`www.abhilekhsarmah.me`} />
        <meta name='title' property='og:title' content='Abhilekh Sarmah' />
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
          content='abhilekh sarmah, Abhilekh Sarmah, developer, Software Developer, abhilekhsarmah'
        />
      </Head>
      <div className='pt-[5rem]'>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SeventhPage />
        <SixthPage />
        <EighthPage />
      </div>
    </div>
  );
}
