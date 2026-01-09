import { Heart, Brain, Target, Shield } from "lucide-react";

const WhoWeAreSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Validated Psychometrics",
      description: "Scientific assessments that reveal true strengths, interests, and aptitudes.",
    },
    {
      icon: Target,
      title: "Career Intelligence",
      description: "Real data on acceptance rates, effort required, and long-term trade-offs.",
    },
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Understanding that career confusion is emotional—we address the anxiety too.",
    },
    {
      icon: Shield,
      title: "Realistic Guidance",
      description: "Replacing uncertainty and fear with self-awareness and clear direction.",
    },
  ];

  return (
    <section id="who-we-are" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mt-4 mb-6">
              A Career Clarity Platform Built for{" "}
              <span className="text-gradient">Students</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Project Pioneer is designed for students facing tough academic and life decisions. 
              We guide you toward choices made with confidence, not pressure.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Block */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl gradient-section border border-primary/10">
            <blockquote className="text-center">
              <p className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed max-w-3xl mx-auto">
                "Career confusion isn't just academic—it's an emotional weight. We replace 
                uncertainty, comparison, and fear with <span className="text-primary">self-awareness</span>, 
                <span className="text-primary"> clear direction</span>, and 
                <span className="text-primary"> realistic action</span>."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
