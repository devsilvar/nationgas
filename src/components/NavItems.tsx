import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';
import clsx from 'clsx';

type NavigationMenuItem = {
  label: string;
  href: string;
};

interface NavigationMenuProps {
  items?: NavigationMenuItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function NavigationMenu({
  items = [],
  isMobile = false,
  onItemClick = () => {},
}: NavigationMenuProps) {
  return isMobile ? (
    <div className='px-4 pt-2 z-10 pb-3 space-y-1'>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className='block px-3 py-2 text-black hover:text-gray-700  text-center text-sm font-medium'
          onClick={() => onItemClick()}
        >
          {item.label}
        </Link>
      ))}
      <div className='pt-2'>
        <Button variant='outline' className='w-full'>
          Contact Us
        </Button>
      </div>
    </div>
  ) : (
    <div className='hidden md:flex items-center space-x-8'>
      <div className='flex items-center space-x-1'>
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
