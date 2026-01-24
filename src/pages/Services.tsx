import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  FileCheck, 
  Calculator, 
  TrendingUp, 
  Building2, 
  BarChart3, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: FileCheck,
    title: 'Audit',
    description: 'Comprehensive audit services ensuring compliance with regulatory requirements and internal control effectiveness.',
    features: [
      'Compliance Audit',
      'Tax Audit',
      'Internal Audit',
      'Labour Audit',
      'Special Purpose Audit',
    ],
  },
  {
    icon: Calculator,
    title: 'Tax Advisory & Compliance',
    description: 'Expert guidance on Income Tax, VAT, TDS, and strategic tax planning to optimize your fiscal position.',
    features: [
      'Income Tax Planning',
      'VAT Registration & Filing',
      'TDS Compliance',
      'Tax Dispute Resolution',
      'International Taxation',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Financial Consultancy',
    description: 'Strategic financial advice and management consultancy to drive sustainable business growth.',
    features: [
      'Financial Planning',
      'Budgeting & Forecasting',
      'Cash Flow Management',
      'Investment Advisory',
      'Risk Assessment',
    ],
  },
  {
    icon: Building2,
    title: 'Business Registration',
    description: 'End-to-end support for company formation, registration, and ongoing accounting services.',
    features: [
      'Company Registration',
      'PAN/VAT Registration',
      'License & Permits',
      'Annual Compliance',
      'Business Restructuring',
    ],
  },
  {
    icon: BarChart3,
    title: 'Project Feasibility',
    description: 'Detailed feasibility studies and cost analysis for informed investment decisions.',
    features: [
      'Market Analysis',
      'Financial Projections',
      'Cost-Benefit Analysis',
      'Risk Assessment',
      'Investment Appraisal',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Training Programs',
    description: 'Capacity building workshops on financial management, taxation, and compliance.',
    features: [
      'Tax Compliance Training',
      'Financial Reporting',
      'Accounting Software',
      'Corporate Governance',
      'Customized Workshops',
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6 tracking-tight">
                Comprehensive Financial Solutions
              </h1>
              <p className="text-muted-foreground text-lg">
                Professional assurance, taxation, and advisory services tailored to meet 
                the unique needs of businesses and individuals across Nepal.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="apple-card hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                Need a Customized Solution?
              </h2>
              <p className="text-muted-foreground mb-8">
                Every business is unique. Let us understand your requirements and provide 
                a tailored solution that fits your needs.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Discuss Your Requirements
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
