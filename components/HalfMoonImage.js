import React from 'react';
import Image from 'next/image';

const HalfMoonImage = ({ src, alt }) => {
  return (
    <div className="relative overflow-hidden w-64 h-64 rounded-full border-8 border-green-500">
      <img src={src} alt={alt} width={320} height={320} className="object-cover w-full h-full rounded-full" />
    </div>
  );
};

export default HalfMoonImage;
