import { useState } from 'react';
import { Menu } from 'lucide-react';
import NavigationMenu from './NavItems';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

// Main Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <nav className='relative z-10'>
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-40 z-40'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className=' mx-auto '>
        <div className='flex items-center shadow-sm justify-between h-20 px-4 sm:px-6 lg:px-12'>
          <Link to='/'>
            <img src='/logo.png' alt='Logo ' className='z-10 relative' />
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {/* Navigation Links */}
            <NavigationMenu
              mobileState={false}
              items={navigationItems}
              isMobile={false}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-gray-black hover:text-gray-600 p-2'
            >
              {isMobileMenuOpen ? <Menu /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={clsx(
            'lg:hidden shadow-2xl fixed z-50 h-screen top-0 left-0 w-[70%] bg-white border-r border-gray-100 transition-transform duration-500 ease-in-out',
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <NavigationMenu
            items={navigationItems}
            isMobile={true}
            mobileState={isMobileMenuOpen}
            onItemClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
