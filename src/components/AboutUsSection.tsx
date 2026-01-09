import { GraduationCap, Users, TrendingUp, BookOpen } from "lucide-react";

const AboutUsSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      label: "Class 9-12",
      description: "Continuous guidance throughout critical academic years",
    },
    {
      icon: Users,
      label: "Collaborative",
      description: "Working with schools, counsellors, and families",
    },
    {
      icon: TrendingUp,
      label: "Evolving",
      description: "Platform that grows alongside student journeys",
    },
    {
      icon: GraduationCap,
      label: "Aspirational",
      description: "Grounded yet ambitious support for every student",
    },
  ];

  return (
    <section id="about-us" className="py-24 gradient-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Centered */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mt-4 mb-6">
              Bridging the Gap with{" "}
              <span className="text-gradient">Honest Guidance</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                Today's students navigate overwhelming options, biased advice, and 
                glossy career stories that hide real challenges—low acceptance rates, 
                required effort, and long-term trade-offs.
              </p>
              <p>
                <strong className="text-foreground">Project Pioneer bridges this gap</strong> with 
                honest, structured guidance. Our platform evolves alongside students from 
                Class 9 through 12 and beyond, revealing true fit, readiness, and growth paths.
              </p>
              <p>
                We partner closely with schools, counsellors, educators, and families 
                to deliver aspirational yet grounded support.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
