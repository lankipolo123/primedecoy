import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ target, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState<number>(0);
  const duration = 900; // Animation duration in ms
  const frameRate = 1200 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);
  const increment = target / totalFrames;

  useEffect(() => {
    let currentCount = 0;
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      currentCount = Math.min(target, increment * frame);
      setCount(Math.floor(currentCount));
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [target, increment, totalFrames]);

  return (
    <span className="text-4xl font-bold text-[#013567] transition-all duration-500">
      {prefix}{count}{suffix}
    </span>
  );
};

export default function StatsSection() {
  return (
    
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <AnimatedCounter target={500} suffix="M+" />
            <p className="mt-2 text-lg text-[#013567]">worth of deals transacted</p>
          </div>
          
          <div className="p-6">
            <AnimatedCounter target={7000} suffix="+" />
            <p className="mt-2 text-lg text-[#013567]">clients served</p>
          </div>
          
          <div className="p-6">
            <AnimatedCounter target={300} suffix="+" />
            <p className="mt-2 text-lg text-[#013567]">real estate projects</p>
          </div>
          
          <div className="p-6">
            <AnimatedCounter target={150} suffix="+" />
            <p className="mt-2 text-lg text-[#013567]">research studies done</p>
          </div>
        </div>
      </div>
    </section>
  );
}