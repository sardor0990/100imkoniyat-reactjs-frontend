declare module 'react-rating-stars-component' {
    import { ComponentType } from 'react';
  
    interface ReactStarsProps {
      count?: number;
      value?: number;
      onChange?: (newValue: number) => void;
      size?: number;
      isHalf?: boolean;
      // Add other props based on the package documentation
    }
  
    const ReactStars: ComponentType<ReactStarsProps>;
  
    export default ReactStars;
  }