declare module '@splidejs/react-splide' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

  interface SplideOptions {
    type?: 'loop' | 'slide' | 'fade';
    drag?: 'free' | 'move';
    focus?: 'center' | 'start' | 'end';
    perPage?: number;
    arrows?: boolean;
    pagination?: boolean;
    autoScroll?: {
      speed?: number;
      pauseOnHover?: boolean;
      [key: string]: any;
    };
    breakpoints?: {
      [key: number]: Partial<SplideOptions>;
    };
    [key: string]: any;
  }

  interface SplideProps {
    options?: SplideOptions;
    extensions?: { [key: string]: any };
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  }

  interface SplideSlideProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

declare module '@splidejs/splide-extension-auto-scroll' {
  export const AutoScroll: any;
}
