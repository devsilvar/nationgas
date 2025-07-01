import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'nothing';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'nothing',
  onClick,
  className = '',
}) => {
  const baseClasses =
    'px-4 py-2 text-sm font-medium rounded transition-colors duration-200';
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    nothing: '',
    outline:
      'border border-gray-900 text-gray-900 hover:bg-gray-70 rounded-md hover:text-gray-900',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${
        variants[variant as keyof typeof variants]
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
