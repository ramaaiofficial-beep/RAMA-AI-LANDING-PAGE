import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero section bg.png";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Gradient overlay to enhance the image gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-custom relative z-10" style={{ paddingTop: "clamp(4rem, 8vw + 2rem, 6rem)" }}>
        <div className="max-w-4xl mx-auto text-center relative" style={{ paddingLeft: "clamp(0.5rem, 2vw, 1rem)", paddingRight: "clamp(0.5rem, 2vw, 1rem)" }}>
          {/* Red Gridlines Pattern */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 0, 0, 0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 0, 0, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          
          <div className="relative z-10">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 animate-fade-up relative overflow-hidden"
              style={{
                background: "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(42, 15, 8, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(253, 200, 100, 0.3)",
                boxShadow: `
                  0 8px 32px 0 rgba(0, 0, 0, 0.5),
                  0 0 0 1px rgba(253, 200, 100, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  0 0 20px rgba(253, 80, 9, 0.15)
                `
              }}
            >
              {/* Fine noise texture */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  mixBlendMode: "overlay",
                  pointerEvents: "none"
                }}
              />
              {/* Golden-orange glow from bottom-left */}
              <div 
                className="absolute inset-0 opacity-50"
                style={{
                  background: "radial-gradient(ellipse 150% 150% at 0% 100%, rgba(253, 80, 9, 0.4) 0%, transparent 60%)",
                  pointerEvents: "none"
                }}
              />
              {/* Glass highlight overlay */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 40%)",
                  pointerEvents: "none"
                }}
              />
              <Sparkles className="w-4 h-4 text-primary relative z-10" />
              <span className="text-sm font-medium text-white relative z-10" style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 255, 255, 0.1)" }}>More than Product, A Promise</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="mb-4 sm:mb-6 animate-fade-up text-center px-2" 
              style={{ 
                animationDelay: "0.1s",
                color: "#FAFAFA",
                fontFamily: '"Spline Sans", sans-serif',
                fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "1.1"
              }}
            >
              Building Practical, Scalable
              <br />
              and Responsible{" "}
              <span 
                className="inline-block"
                style={{
                  color: "#FD5009",
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: "1.1"
                }}
              >
                AI Systems
              </span>
            </h1>

            {/* Subheadline */}
            <div className="rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p 
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "clamp(0.875rem, 1.8vw, 1.125rem)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  textAlign: "center"
                }}
                className="px-2 sm:px-4"
              >
                We design, deploy AI systems that think responsibly, speak naturally, and work reliably combining cultural intelligence, advanced engineering, and real-world deployment experience across multiple industries.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto" style={{ minWidth: "clamp(180px, 15vw, 234px)" }}>
                <a 
                  href="#industries"
                  style={{
                    color: "#06071A",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "110%"
                  }}
                >
                  Explore Our Solutions
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto" style={{ minWidth: "clamp(180px, 15vw, 234px)" }}>
                <a 
                  href="#contact"
                  style={{
                    color: "#FAFAFA",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal"
                  }}
                >
                  Talk to Our Team
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
