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
        <img src='/logo.png' />
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
      <div className='absolute bottom-16  right-1/4'>
        <Button
          variant='outline'
          className='w-full bg-[#FDE056] font-[bold] border-transparent shadow-2xl'
        >
          Contact Us
        </Button>
      </div>
    </div>
  ) : (
    <div className='hidden md:flex items-center space-x-8'>
      <div className='flex items-center space-x-1 '>
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className={({ isActive }) =>
              clsx(
                'text-sm font-medium px-3 py-2',
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
      <Button variant='outline'>Contact Us</Button>
    </div>
  );
}

NavigationMenu.propTypes = {
  items: PropTypes.array.isRequired,
  isMobile: PropTypes.bool,
  onItemClick: PropTypes.func,
};
