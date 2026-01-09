import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Compass, Map } from "lucide-react";

const MissionSection = () => {
  const strivePoints = [
    "Reduce career-related anxiety and confusion",
    "Prevent misalignment between interests, abilities, and choices",
    "Swap vague motivation for actionable, evidence-based guidance",
    "Build self-awareness and skills for a changing job market",
  ];

  return (
    <section id="mission" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Mission
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mt-4 mb-6 max-w-4xl mx-auto">
              Empowering Students with Clear, Confident, and{" "}
              <span className="text-gradient">Realistic Career Decisions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At the moments when they matter most.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* We Strive To */}
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  We Strive To
                </h3>
              </div>
              <ul className="space-y-4">
                {strivePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* At Our Core */}
            <div className="p-8 rounded-3xl gradient-primary text-primary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl">
                  At Our Core
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed opacity-95">
                  Career guidance isn't about unlimited dreams.
                </p>
                <p className="text-lg leading-relaxed font-medium">
                  It's about understanding what you can realistically build—and 
                  equipping you with the roadmap to get there.
                </p>
                <div className="pt-4 border-t border-background/20 mt-6">
                  <p className="font-display font-bold text-xl">
                    We're building a generation of ambitious, prepared students.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-10 rounded-3xl bg-accent border border-primary/10">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Ready to Discover Your Path?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you're a student seeking clarity or a school looking for comprehensive 
              career guidance solutions, we're here to help.
            </p>
            <Button variant="hero" size="xl">
              Discover Project Pioneer for Your Student/School
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
