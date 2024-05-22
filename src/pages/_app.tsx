import '@/styles/globals.css';
import '@/styles/custom.css';
import '@/styles/navbar.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
