import '@/styles/globals.css';
import '@/styles/custom.css';
import '@/styles/navbar.css';
import type { AppProps } from 'next/app';
import { lazy } from 'react';
const Navbar = lazy(() => import('../components/NavBar/Navbar'));
const Footer = lazy(() => import('../components/Footer/Footer'));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
