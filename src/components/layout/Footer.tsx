import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Audit',
    'Tax Advisory',
    'Financial Consultancy',
    'Business Registration',
    'Project Feasibility',
    'Training Programs',
  ];

  const quickLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/services', isRoute: true },
    { label: 'Team', href: '/team', isRoute: true },
    { label: 'Blog', href: '/blog', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-semibold text-lg">
                D. Utsav & Associates
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
              Your trusted partner in finance and tax. Professional 
              services across Nepal since 2017.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-primary-foreground/60">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link 
                      to={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60 flex-shrink-0 mt-1" />
                <span className="text-sm text-primary-foreground/60">
                  Govinda Bhawan, Pepsicola<br />Kathmandu 44600, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/60 flex-shrink-0" />
                <a 
                  href="tel:+9779851178943" 
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  +977 9851178943
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/60 flex-shrink-0" />
                <a 
                  href="mailto:dangiutsav@gmail.com" 
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  dangiutsav@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>© 2017 D. Utsav & Associates. All rights reserved.</p>
            <p>Registered with ICAN</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
