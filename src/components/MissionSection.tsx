"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = target;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function pour un effet plus fluide
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-2 sm:mb-3">
      {count}{suffix}
    </div>
  );
}

export default function MissionSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12">
          <span>Notre </span>
          <span className="text-sky-blue">Mission</span>
        </h2>

        {/* Paragraphe descriptif fusionné */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 sm:mb-16 lg:mb-20 leading-relaxed max-w-3xl mx-auto">
          Plus qu&apos;un club, nous sommes un espace de création et d&apos;apprentissage où les étudiants passionnés conçoivent, programment et fabriquent des projets innovants en lien avec la robotique. Nous souhaitons partager le savoir et promouvoir la robotique au sein de notre école.
        </p>

        {/* Section Statistiques */}
        <div className="mt-12 sm:mt-16">
          {/* Statistiques */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <AnimatedCounter target={50} suffix="+" />
              <div className="text-sm sm:text-base md:text-lg text-gray-700 font-normal">
                Membres actifs
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <AnimatedCounter target={2} suffix="+" />
              <div className="text-sm sm:text-base md:text-lg text-gray-700 font-normal">
                Événements chaque mois
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <AnimatedCounter target={100} suffix="+" />
              <div className="text-sm sm:text-base md:text-lg text-gray-700 font-normal">
                Participants à nos ateliers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
