import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Office',
      value: 'Govinda Bhawan, Pepsicola',
      subValue: 'Kathmandu 44600, Nepal',
      href: 'https://maps.app.goo.gl/Foi33Kp1NvPPRTU17',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9851178943',
      href: 'tel:+9779851178943',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'dangiutsav@gmail.com',
      href: 'mailto:dangiutsav@gmail.com',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Sun - Fri: 10:00 - 17:00',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss your financial needs? Reach out to us for a consultation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="apple-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
                {item.href ? (
                  <a 
                    href={item.href} 
                    target={item.href.startsWith('https') ? '_blank' : undefined}
                    rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                    className="block font-medium text-primary mt-1 hover:text-accent transition-colors text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-primary mt-1 text-sm">{item.value}</p>
                )}
                {item.subValue && (
                  <p className="text-muted-foreground text-xs">{item.subValue}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendly */}
            <div className="apple-card p-0 overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Schedule a Meeting</h3>
                    <p className="text-sm text-muted-foreground">Book a 30-minute consultation</p>
                  </div>
                </div>
              </div>
              <div className="h-[450px]">
                <iframe
                  src="https://calendly.com/dangiutsav/30min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a consultation"
                />
              </div>
              <div className="p-4 text-center border-t border-border">
                <a 
                  href="https://calendly.com/dangiutsav/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm font-medium"
                >
                  Open Calendly in new tab →
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="apple-card p-0 overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Our Location</h3>
                    <p className="text-sm text-muted-foreground">Govinda Bhawan, Pepsicola, Kathmandu</p>
                  </div>
                </div>
              </div>
              <div className="h-[450px] relative group">
                <a 
                  href="https://maps.app.goo.gl/Foi33Kp1NvPPRTU17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src="/map-location.png"
                    alt="Office Location - Gobinda Bhawan, Pepsicola, Kathmandu"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-lg shadow-lg text-primary font-medium text-sm">
                      Click to open in Google Maps
                    </span>
                  </div>
                </a>
              </div>
              <div className="p-4 text-center border-t border-border">
                <a 
                  href="https://maps.app.goo.gl/Foi33Kp1NvPPRTU17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm font-medium"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
