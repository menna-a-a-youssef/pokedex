import { useEffect, useRef, useState } from "react";
import {
  StatRow,
  StatLabel,
  BarContainer,
  BarFill,
  StatValue,
  StatBarContainer,
} from "./StatBar.styles";

type StatBarProps = {
  name: string;
  value: number;
};

const StatBar = ({ name, value }: StatBarProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = statRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    let animationFrame: number;
    const duration = 800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value]);

  return (
    <StatBarContainer ref={statRef}>
      <StatLabel>
        {name} <StatValue>{displayValue}</StatValue>
      </StatLabel>

      <StatRow>
        <BarContainer>
          <BarFill $width={isVisible ? `${(value / 255) * 100}%` : "0%"} />
        </BarContainer>
      </StatRow>
    </StatBarContainer>
  );
};

export default StatBar;
