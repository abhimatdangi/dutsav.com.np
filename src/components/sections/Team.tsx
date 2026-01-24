import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Utsav Dangi',
      role: 'Consultant',
      image: '/UD.jpeg',
      linkedin: 'https://www.linkedin.com/in/utsav-dangi-ca/',
      bio: 'Leading financial consulting services with expertise in tax advisory, audit, and business compliance.',
    },
    {
      name: 'Nabin Kumar BK',
      role: 'Advisor',
      image: '/Nabin.webp',
      linkedin: 'https://www.linkedin.com/in/nabin-kumar-bk1-nkbk19/',
      bio: 'Specialized in financial analysis, regulatory compliance, and strategic business advisory.',
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6 tracking-tight">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground text-lg">
            Our experienced team is dedicated to providing exceptional financial 
            services and helping your business succeed.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="apple-card text-center group hover-lift"
            >
              {/* Photo */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/10 group-hover:ring-accent/30 transition-all">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-semibold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>
              
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
  );
};

export default Team;
