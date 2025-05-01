import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Button from '@/utils/Button';

import Catalogue from '@/pages/Catalogue';
import Fashion from '@/pages/Fashion';
import Favourite from '@/pages/Favourite';
import Lifestyle from '@/pages/Lifestyle';

import logo from '@/assets/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='relative z-1000 flex items-center justify-between px-4 py-4 sm:px-12 sm:py-6'>
      <NavLink to='/' onClick={closeMenu}>
        <img className='w-24' src={logo} alt='Fashion Logo' />
      </NavLink>

      {/* Desktop Navigation */}
      <div className='hidden items-center md:gap-12 lg:flex'>
        <NavLink className='uppercase' to='/catalogue'>
          Catalogue
        </NavLink>
        <NavLink className='uppercase' to='/fashion'>
          Fashion
        </NavLink>
        <NavLink className='uppercase' to='/favourite'>
          Favourite
        </NavLink>
        <NavLink className='uppercase' to='/lifestyle'>
          Lifestyle
        </NavLink>
        <Button customStyle={'uppercase'}>sign up</Button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='lg:hidden'>
        <button
          onClick={toggleMenu}
          className='p-2 text-gray-800 hover:text-gray-600 focus:outline-none'>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-full right-0 left-0 z-10 bg-white py-4 shadow-lg lg:hidden'>
          <div className='flex flex-col items-center gap-6'>
            <NavLink className='uppercase' to='/catalogue' onClick={closeMenu}>
              Catalogue
            </NavLink>
            <NavLink className='uppercase' to='/fashion' onClick={closeMenu}>
              Fashion
            </NavLink>
            <NavLink className='uppercase' to='/favourite' onClick={closeMenu}>
              Favourite
            </NavLink>
            <NavLink className='uppercase' to='/lifestyle' onClick={closeMenu}>
              Lifestyle
            </NavLink>
            <Button customStyle={'uppercase'}>sign up</Button>
          </div>
        </div>
      )}

      <Routes>
        <Route path='/' element={<Catalogue />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/lifestyle' element={<Lifestyle />} />
      </Routes>
    </nav>
  );
};

export default NavBar;
