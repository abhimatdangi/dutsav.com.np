import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    'Accuracy & Precision',
    'Complete Transparency',
    'Client Trust',
    'Professional Excellence',
    'Continuous Innovation',
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-maroon font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6 tracking-tight">
              Excellence in Financial Services
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              D. Utsav & Associates is a leading financial consulting firm in Nepal, 
              committed to strengthening financial discipline in Nepal's evolving economy.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We pride ourselves on understanding Nepal's unique regulatory landscape and 
              providing tailored solutions that help our clients thrive while maintaining 
              full compliance with local and international standards.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-maroon flex-shrink-0" />
                  <span className="text-foreground text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="apple-card hover-lift">
              <span className="text-maroon font-medium text-sm uppercase tracking-wider">Our Mission</span>
              <h3 className="text-xl font-semibold text-primary mt-2 mb-3">Empowering Success</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional financial and advisory services that empower 
                businesses and individuals to achieve their goals while maintaining 
                the highest standards of professional ethics.
              </p>
            </div>

            {/* Vision Card */}
            <div className="apple-card hover-lift">
              <span className="text-maroon font-medium text-sm uppercase tracking-wider">Our Vision</span>
              <h3 className="text-xl font-semibold text-primary mt-2 mb-3">Nepal's Most Trusted</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Nepal's most trusted financial consulting firm, recognized for 
                our commitment to excellence, innovation, and contribution to the 
                nation's financial ecosystem.
              </p>
            </div>

            {/* Registration Info */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div>
                  <h3 className="font-semibold">Registered & Certified</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Licensed by ICAN & Government of Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
