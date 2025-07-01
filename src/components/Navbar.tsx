import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavigationMenu from './NavItems';

// Main Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <nav className='relative z-10'>
      <div className=' mx-auto '>
        <div className='flex items-center shadow-sm justify-between h-20 px-4 sm:px-6 md:px-12'>
          <img src='/logo.png' alt='Logo' />
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {/* Navigation Links */}
            <NavigationMenu items={navigationItems} isMobile={false} />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-gray-black hover:text-gray-600 p-2'
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden shadow-lg absolute z-100 top-20 left-0 w-full bg-white border-gray-100'>
            <NavigationMenu
              items={navigationItems}
              isMobile={true}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
