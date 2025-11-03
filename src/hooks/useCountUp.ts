import { useEffect, useRef, useState } from 'react';

export const useCountUp = (endValue: string, duration: number = 2000) => {
  const [count, setCount] = useState<string>('0');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Parse the end value to extract number and suffix
    const match = endValue.match(/^(\d+(?:\.\d+)?)(.*)/);
    if (!match) return;

    const targetNumber = parseFloat(match[1]);
    const suffix = match[2] || '';

    const startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic function
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      const currentValue = Math.floor(targetNumber * easedProgress);
      setCount(`${currentValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration]);

  return { count, elementRef };
};
