import React from 'react';

export const OFFICIAL_LOGO_IMAGE = '/src/assets/images/sanatel_logo_horizontal_1792419378299.jpg';

interface SanatelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'card';
}

export const SanatelLogo: React.FC<SanatelLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
}) => {
  // Generous height classes so the logo is large, clear and readable
  const sizeClasses = {
    sm: 'h-12 w-auto',
    md: 'h-14 sm:h-16 w-auto',
    lg: 'h-18 sm:h-20 w-auto',
    xl: 'h-24 sm:h-28 w-auto',
  };

  const currentSizeClass = sizeClasses[size];

  // If in dark footer or card mode, wrap with a clean white rounded card so the official logo stands out perfectly
  if (variant === 'dark' || variant === 'card') {
    return (
      <div className={`inline-block bg-white p-2 rounded-2xl shadow-sm border border-slate-200/80 ${className}`}>
        <img
          src={OFFICIAL_LOGO_IMAGE}
          alt="SANATEL - Customer Relationship Expert"
          className={`${currentSizeClass} object-contain select-none`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Pure image logo - large, legible, with zero extra text appended
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={OFFICIAL_LOGO_IMAGE}
        alt="SANATEL - Customer Relationship Expert"
        className={`${currentSizeClass} object-contain`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
