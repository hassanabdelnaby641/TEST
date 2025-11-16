export interface ScrollableCarouselProps {
  children: React.ReactNode[];
}

export interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}