import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar`}>
      <div className={`menuIcon`} onClick={toggleMenu}>
        <span className={isOpen ? `menuIconOpen` : ''}>&#9776;</span>
      </div>
      <ul
        className={`${`navLinks rounded-xl`} ${isOpen ? `navLinksOpen` : ''}`}
      >
        <li className='hover:bg-white py-1 px-2 transition transform duration-300 ease-in-out md:hover:scale-105 cursor-pointer rounded-lg'>
          <Link onClick={toggleMenu} href='/' aria-label='abhilekh sarmah'>
            Home
          </Link>
        </li>
        <li className='hover:bg-white py-1 px-2 transition transform duration-300 ease-in-out md:hover:scale-105 cursor-pointer rounded-lg'>
          <Link
            onClick={toggleMenu}
            href='/contactme'
            aria-label='contact with abhilekh sarmah'
          >
            Contact Me
          </Link>
        </li>
        <li className='hover:bg-white py-1 px-2 transition transform duration-300 ease-in-out md:hover:scale-105 cursor-pointer rounded-lg'>
          <Link
            onClick={toggleMenu}
            href='/resume-me'
            aria-label='resume of abhilekh sarmah'
          >
            Resume
          </Link>
        </li>
      </ul>
      <div className={`logo`}>
        <Link href='/' aria-label='profile of abhilekh sarmah'>
          <img
            src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1716280107/Abhilekhz/ugu7aigjsszagmy8kqxe.jpg'
            className='sm:w-14 sm:h-14 w-10 h-10 rounded-full'
            title='Abhilekh Sarmah'
            alt='abhilekhsarmah a software developer'
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
