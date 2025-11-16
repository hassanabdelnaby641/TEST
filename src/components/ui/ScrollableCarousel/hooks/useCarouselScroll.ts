import { useCallback, useState } from 'react';

export const useCarouselScroll = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent, offsetLeft: number, currentScrollLeft: number) => {
    setIsDragging(true);
    setStartX(e.pageX - offsetLeft);
    setScrollLeft(currentScrollLeft);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent, offsetLeft: number, element: HTMLDivElement) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - offsetLeft;
    const walk = (x - startX) * 2;
    element.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  return {
    isDragging,
    setIsDragging,
    handleMouseDown,
    handleMouseMove
  };
};