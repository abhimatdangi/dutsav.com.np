import { 
  FileCheck, 
  Calculator, 
  TrendingUp, 
  Building2, 
  BarChart3, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: 'Audit',
      description: 'Comprehensive audit services ensuring compliance with regulatory requirements and internal control effectiveness.',
    },
    {
      icon: Calculator,
      title: 'Tax Advisory & Compliance',
      description: 'Expert guidance on Income Tax, VAT, TDS, and strategic tax planning to optimize your fiscal position.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Consultancy',
      description: 'Strategic financial advice and management consultancy to drive sustainable business growth.',
    },
    {
      icon: Building2,
      title: 'Business Registration',
      description: 'End-to-end support for company formation, registration, and ongoing accounting services.',
    },
    {
      icon: BarChart3,
      title: 'Project Feasibility',
      description: 'Detailed feasibility studies and cost analysis for informed investment decisions.',
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Capacity building workshops on financial management, taxation, and compliance.',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6 tracking-tight">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive financial services tailored to meet the unique needs of 
            businesses and individuals across Nepal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group apple-card hover-lift cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a customized solution for your business?
          </p>
          <Button variant="default" size="lg" onClick={scrollToContact}>
            Discuss Your Requirements
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
