import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, UserCheck, Trophy } from 'lucide-react';

interface Stat {
  number: number;
  suffix: string;
  label: string;
  icon: any;
}

interface AnimatedStatsProps {
  stats?: Stat[];
}

export function AnimatedStats({ stats: customStats }: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const defaultStats: Stat[] = [
    { number: 500, suffix: '+', label: 'Projects Completed', icon: Briefcase },
    { number: 200, suffix: '+', label: 'Happy Clients', icon: Users },
    { number: 50, suffix: '+', label: 'Expert Consultants', icon: UserCheck },
    { number: 15, suffix: '+', label: 'Years Experience', icon: Trophy }
  ];

  const stats = customStats || defaultStats;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, statIndex) => {
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(stat.number * easeOutQuad);

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[statIndex] = currentValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[statIndex] = stat.number;
            return newCounts;
          });
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#FFCC33] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="flex flex-col items-center">
                  {/* Icon - Sharp and Clean */}
                  <div className="mb-4">
                    <div className="bg-black/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-900 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Animated number - Sharp and Bold */}
                  <div className="text-5xl md:text-6xl mb-2">
                    {counts[index]}{stat.suffix}
                  </div>

                  {/* Label */}
                  <div className="text-base md:text-lg px-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}