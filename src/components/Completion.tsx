import React from 'react';
import { useNavigate } from 'react-router-dom';

type ProfileCompletionBarProps = {
  completionPercentage: number; // e.g. 75
};

const ProfileCompletionBar: React.FC<ProfileCompletionBarProps> = ({
  completionPercentage,
}) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (completionPercentage / 100) * circumference;

  const navigate = useNavigate();

  return (
    <div className='flex items-center gap-4 bg-white shadow-lg px-4 py-3 rounded-lg w-fit border border-gray-200'>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke='#e5e7eb'
          fill='transparent'
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke='#10b981'
          fill='transparent'
          strokeWidth={stroke}
          strokeLinecap='round'
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.35s' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x='50%'
          y='50%'
          dominantBaseline='middle'
          textAnchor='middle'
          fontSize='14'
          fill='#111827'
        >
          {completionPercentage}%
        </text>
      </svg>

      <div className='space-y-1'>
        <p className='text-sm font-semibold text-gray-700'>
          Profile Completion
        </p>
        {completionPercentage < 100 ? (
          <>
            <p className='text-xs text-gray-500'>
              Complete your profile to unlock all features.
            </p>
            <button
              onClick={() => navigate('/profile')}
              className='text-xs text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1 rounded transition'
            >
              Complete Now
            </button>
          </>
        ) : (
          <p className='text-xs text-emerald-600 font-medium'>
            Profile fully complete!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileCompletionBar;
