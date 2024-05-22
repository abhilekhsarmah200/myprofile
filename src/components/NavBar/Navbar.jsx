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
          <Link onClick={toggleMenu} href='/'>
            Home
          </Link>
        </li>
        <li className='hover:bg-white py-1 px-2 transition transform duration-300 ease-in-out md:hover:scale-105 cursor-pointer rounded-lg'>
          <Link onClick={toggleMenu} href='/contactme'>
            Contact Me
          </Link>
        </li>
        <li className='hover:bg-white py-1 px-2 transition transform duration-300 ease-in-out md:hover:scale-105 cursor-pointer rounded-lg'>
          <Link onClick={toggleMenu} href='/resume-me'>
            Resume
          </Link>
        </li>
      </ul>
      <div className={`logo`}>
        <Link href='/'>
          <img
            src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1716285084/Abhilekhz/erudbha5ns1nsjyp7ctq.png'
            className='sm:w-20 sm:h-20 w-12 h-12'
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
