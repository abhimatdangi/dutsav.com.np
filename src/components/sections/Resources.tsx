import { Download, Calendar, FileText, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const resources = [
    {
      icon: Calendar,
      title: 'Tax Calendar 2081/82',
      description: 'Important tax deadlines and filing dates for the fiscal year.',
      type: 'PDF',
    },
    {
      icon: FileText,
      title: 'VAT Compliance Checklist',
      description: 'Essential checklist for maintaining VAT compliance.',
      type: 'PDF',
    },
    {
      icon: BookOpen,
      title: 'Audit Preparation Guide',
      description: 'Step-by-step guide to prepare for statutory audits.',
      type: 'PDF',
    },
  ];

  const insights = [
    {
      title: 'New VAT Amendments Effective from Magh 2081',
      excerpt: 'Key changes to VAT regulations affecting businesses across Nepal.',
      date: 'January 15, 2024',
      category: 'Tax Advisory',
    },
    {
      title: 'Income Tax Filing Deadline Extended',
      excerpt: 'IRD announces extension for income tax return submissions.',
      date: 'January 8, 2024',
      category: 'Regulatory Updates',
    },
    {
      title: 'Digital Payment Tax Incentives Announced',
      excerpt: 'New tax benefits for businesses adopting digital payments.',
      date: 'December 28, 2023',
      category: 'Compliance',
    },
  ];

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Downloads */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Resources</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6 tracking-tight">
              Helpful Tools & Guides
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Access our collection of free resources designed to help you stay 
              compliant and informed about Nepal's financial regulations.
            </p>
            
            {/* Resource Cards */}
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                    <resource.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm">{resource.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5">{resource.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Button variant="outline" className="mt-6 w-full">
              View All Resources
            </Button>
          </div>

          {/* Right Content - Latest Updates */}
          <div>
            <div className="apple-card">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Latest Updates</span>
              <h3 className="text-xl font-semibold text-primary mt-2 mb-6">Finance & Tax News</h3>
              
              <div className="space-y-6">
                {insights.map((insight, index) => (
                  <article key={index} className="pb-6 border-b border-border last:border-0 last:pb-0 group cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                        {insight.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{insight.date}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
                      {insight.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center gap-1 mt-3 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ExternalLink className="h-3 w-3" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <Button variant="outline" className="mt-6 w-full">
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
