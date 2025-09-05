import { ImageProps } from 'next/image';

// Common image sizes for responsive images
export const imageSizes = {
  thumbnail: '(max-width: 200px) 100vw, 200px',
  card: '(max-width: 400px) 100vw, 400px',
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px',
  fullWidth: '100vw',
  threeColumn: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
};

// Common blur data URLs
export const blurDataUrls = {
  video: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
  square: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
};

export interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'sizes'> {
  src: string;
  alt: string;
  sizeVariant?: keyof typeof imageSizes;
  aspectRatio?: 'video' | 'square';
  priority?: boolean;
}

export function getOptimizedImageProps({
  src,
  alt,
  sizeVariant = 'card',
  aspectRatio = 'video',
  priority = false,
  ...props
}: OptimizedImageProps): ImageProps {
  return {
    src,
    alt,
    sizes: imageSizes[sizeVariant],
    placeholder: 'blur',
    blurDataURL: blurDataUrls[aspectRatio],
    priority,
    quality: 85,
    ...props,
  };
}