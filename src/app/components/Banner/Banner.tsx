
// components/Banner.tsx
import React from 'react';
import './banner.css';


interface BannerProps {
  altText: string;
}

const Banner: React.FC<BannerProps> = ({ altText }) => {
    const imageUrl = 'images/banner.png';

  return (
    <div className='todoBanner'> 
    <div className="banner">
      <img src={imageUrl} alt={altText} />
    </div>
    </div>

  );
};

export default Banner;
