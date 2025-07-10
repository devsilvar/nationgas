import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { X } from 'lucide-react';
type NavigationMenuItem = {
  label: string;
  href: string;
};

interface NavigationMenuProps {
  items?: NavigationMenuItem[];
  isMobile?: boolean;
  mobileState?: boolean;
  onItemClick?: () => void;
}

export default function NavigationMenu({
  items = [],
  isMobile = false,
  onItemClick = () => {},
}: NavigationMenuProps) {
  return isMobile ? (
    <div className=' px-4 pt-2 z-50  pb-3 space-y-4  mt-20 '>
      <div className='absolute top-3  left-[5%]'>
        <Link to='/'>
          {' '}
          <img src='/logo.png' />
        </Link>
      </div>

      <div className='absolute top-5  right-4'>
        <button onClick={onItemClick}>
          <X />
        </button>
      </div>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className='block px-3 py-2 text-black -ml-2 hover:text-gray-700 text-start text-sm font-medium'
          onClick={() => onItemClick()}
        >
          {item.label}
        </Link>
      ))}
      <div className='absolute w-full top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"'>
        <Button
          variant='outline'
          link='/contact'
          className=' bg-[#FDE056] font-montserrat w-[70%] px-2 lg:px-8 py-2 mx-auto block  border-transparent shadow-deep hover:scale-110 hover:bg-[#FDE056] hover:text-black transition-all duration-300 text-black text-lg font-semibold'
        >
          Contact Us
        </Button>
      </div>
    </div>
  ) : (
    <div className='hidden lg:flex items-center space-x-8'>
      <div className='flex items-center space-x-9 '>
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className={({ isActive }) =>
              clsx(
                'text-lg font-medium px-3 py-2',
                isActive
                  ? 'text-black'
                  : 'text-gray-500 text-[16px] hover:text-gray-700'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <Button variant='outline' link='/contact'>
        Contact Us
      </Button>
    </div>
  );
}

NavigationMenu.propTypes = {
  items: PropTypes.array.isRequired,
  isMobile: PropTypes.bool,
  onItemClick: PropTypes.func,
};
