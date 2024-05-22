import { Inter } from 'next/font/google';
import FirstPage from '../components/HomePages/FirstPage';
import SecondPage from '../components/HomePages/SecondPage';
import ThirdPage from '../components/HomePages/ThirdPage';
import FourthPage from '../components/HomePages/FourthPage';
import FifthPage from '../components/HomePages/FifthPage';
import SixthPage from '../components/HomePages/SixthPage';
import SeventhPage from '../components/HomePages/SeventhPage';
import EighthPage from '../components/HomePages/EighthPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
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
  );
}
