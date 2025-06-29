import React, { useRef, useEffect } from 'react';

interface InfiniteMovingCardsProps {
  items: React.ReactNode[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
}

const speedMap = {
  slow: 10,
  normal: 20,
  fast: 40,
};

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = 'left',
  speed = 'normal',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let start: number | null = null;
    let scrollAmount = 0;
    const pxPerSec = speedMap[speed] * (direction === 'left' ? 1 : -1);

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      scrollAmount = (elapsed / 1000) * pxPerSec;
      container.scrollLeft = direction === 'left' ? scrollAmount : container.scrollWidth - container.clientWidth - scrollAmount;
      if (scrollAmount >= container.scrollWidth / 2) {
        start = timestamp;
        scrollAmount = 0;
        container.scrollLeft = 0;
      }
      animationRef.current = requestAnimationFrame(step);
    }
    animationRef.current = requestAnimationFrame(step);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [direction, speed]);

  // Duplicate items for seamless loop
  const allItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      className="w-full flex overflow-x-hidden whitespace-nowrap"
      style={{ scrollBehavior: 'auto' }}
    >
      {allItems.map((item, idx) => (
        <div key={idx} className="inline-block mx-4">
          {item}
        </div>
      ))}
    </div>
  );
}; 