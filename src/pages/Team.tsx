import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Utsav Dangi',
    role: 'Consultant',
    image: '/UD.jpeg',
    linkedin: 'https://www.linkedin.com/in/utsav-dangi-ca/',
    bio: 'Leading financial consulting services with expertise in tax advisory, audit, and business compliance.',
    qualifications: ['Chartered Accountant', 'Tax Expert', 'Business Advisor'],
  },
  {
    name: 'Nabin Kumar BK',
    role: 'Advisor',
    image: '/Nabin.webp',
    linkedin: 'https://www.linkedin.com/in/nabin-kumar-bk1-nkbk19/',
    bio: 'Specialized in financial analysis, regulatory compliance, and strategic business advisory.',
    qualifications: ['Financial Analyst', 'Compliance Specialist', 'Strategic Advisor'],
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Team</span>
              <h1 className="text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6 tracking-tight">
                Meet the Experts
              </h1>
              <p className="text-muted-foreground text-lg">
                Our experienced team of professionals is dedicated to providing exceptional 
                financial services and helping your business succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="apple-card text-center hover-lift"
                >
                  {/* Photo */}
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/10">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-2xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-sm mx-auto">
                    {member.bio}
                  </p>

                  {/* Qualifications */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.qualifications.map((qual, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                  
                  {/* LinkedIn */}
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-primary text-center mb-12">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="apple-card text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">Integrity</h3>
                  <p className="text-muted-foreground text-sm">
                    We uphold the highest standards of professional ethics in all our engagements.
                  </p>
                </div>
                <div className="apple-card text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    We strive for excellence in every service we deliver to our clients.
                  </p>
                </div>
                <div className="apple-card text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">Client Focus</h3>
                  <p className="text-muted-foreground text-sm">
                    Your success is our priority. We tailor solutions to meet your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get in touch with our team to discuss how we can help your business grow.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Contact Us
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

export default TeamPage;
