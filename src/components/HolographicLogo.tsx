import React from 'react';
import ProfileCard from './ProfileCard';

interface HolographicLogoProps {
  className?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl?: string;
  onContactClick?: () => void;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
}

const HolographicLogo: React.FC<HolographicLogoProps> = ({
  className = '',
  name = 'Zahid Marwat',
  title = 'Computer Vision Engineer',
  handle = 'zahid-marwat',
  status = 'Open For Discussion',
  contactText = "Let's Connect",
  avatarUrl = '/assets/profile-picture.png',
  onContactClick,
  enableTilt = true,
  enableMobileTilt = true,
}) => {
  return (
    <div className={`holographic-logo ${className}`}>
      <ProfileCard
        name={name}
        title={title}
        handle={handle}
        status={status}
        contactText={contactText}
        avatarUrl={avatarUrl}
        showUserInfo={true}
        enableTilt={enableTilt}
        enableMobileTilt={enableMobileTilt}
        onContactClick={onContactClick}
      />
    </div>
  );
};

export default HolographicLogo;
