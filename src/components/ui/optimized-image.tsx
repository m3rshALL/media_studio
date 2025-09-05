'use client';

import NextImage from 'next/image';
import { getOptimizedImageProps, OptimizedImageProps } from '@/lib/image-optimization';

export function OptimizedImage(props: OptimizedImageProps) {
  const optimizedProps = getOptimizedImageProps(props);
  
  return (
    <NextImage
      {...optimizedProps}
      onError={(e) => {
        // Fallback to placeholder on error
        const target = e.target as HTMLImageElement;
        target.src = '/images/placeholder.jpg';
      }}
    />
  );
}

export default OptimizedImage;