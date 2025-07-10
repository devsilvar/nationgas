import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface MyImageProps {
  image: string;
  alt: string;
}

export const MyImage: React.FC<MyImageProps> = ({ image, alt }) => (
  <LazyLoadImage
    src={image}
    alt={alt}
    effect='blur'
    className='w-full lg:h-full -z-0 relative h-[400px] object-cover' // Make image take full width
    wrapperClassName='w-full my-4 overflow-hidden' // Ensure wrapper also takes full width
    wrapperProps={{
      style: {
        transitionDelay: '1s',
      },
    }}
  />
);
