'use client';

import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration);

  return (
    <div ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}
