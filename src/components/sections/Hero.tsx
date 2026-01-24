import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

const Hero = () => {
  const clients = useCountUp(100, 2000);
  const years = useCountUp(8, 2000);
  const compliance = useCountUp(100, 2000);

  return (
    <section id="home" className="min-h-[85vh] flex items-center bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.1] mb-6 animate-fade-in-delay-1 tracking-tight">
            Your Trusted Partner in{' '}
            <span className="text-maroon">Finance & Tax</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-delay-2 leading-relaxed">
            Professional assurance, taxation, and advisory services for individuals, MEs, 
            SMEs, NGOs, and corporate clients across Nepal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Link to="/contact">
              <Button 
                variant="default" 
                size="xl" 
                className="group"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="xl" 
              >
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-12 border-t border-border animate-fade-in-delay-3">
            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
              <div className="text-center" ref={clients.ref}>
                <div className="text-3xl md:text-4xl font-semibold text-primary">
                  {clients.count}+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Clients</div>
              </div>
              <div className="text-center" ref={years.ref}>
                <div className="text-3xl md:text-4xl font-semibold text-primary">
                  {years.count}+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Years</div>
              </div>
              <div className="text-center" ref={compliance.ref}>
                <div className="text-3xl md:text-4xl font-semibold text-primary">
                  {compliance.count}%
                </div>
                <div className="text-sm text-muted-foreground mt-1">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
