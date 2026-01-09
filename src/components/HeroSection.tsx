import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">
              India's Career Clarity Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Empowering Students to Make{" "}
            <span className="text-gradient">Confident Career Decisions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
            We blend psychometrics, academic data, and emotional support to guide students 
            from Class 9-12 toward choices made with clarity—not pressure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              Discover Project Pioneer
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              For Schools & Counsellors
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-10 border-t border-border/50 animate-fade-up animation-delay-400">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by schools and families across India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Schools Partnered</div>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
