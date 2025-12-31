import { Brain, RefreshCw, Server, Layers } from "lucide-react";
import heroBg from "@/assets/hero section bg.png";

const capabilities = [
  {
    icon: Brain,
    title: "Applied AI Engineering",
    description: "We translate research into production-grade AI systems, focusing on performance, scalability, and stability in real operational environments.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "We build AI systems that adapt over time through monitored learning, feedback loops, and controlled model updates.",
  },
  {
    icon: Server,
    title: "Built for Live Environments",
    description: "We focus on seamless integration, system reliability, and measurable outcomes in live operational settings.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Our architectures are designed to scale across data, users, and workloads without sacrificing performance.",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-padding bg-background noise-overlay relative">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 
            style={{
              alignSelf: "stretch",
              color: "#FAFAFA",
              textAlign: "center",
              fontFamily: '"Spline Sans", sans-serif',
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.2"
            }}
            className="mb-4 px-2"
          >
            Pioneering the{" "}
            <span 
              style={{
                background: "linear-gradient(180deg, #FD5009 0%, #EF1005 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Spline Sans", sans-serif',
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "1.2"
              }}
            >
              Future of AI
            </span>
          </h2>
          <p 
            style={{
              alignSelf: "stretch",
              color: "#777777",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "clamp(0.875rem, 1.6vw, 1.125rem)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.6"
            }}
            className="px-2"
          >
            Our work focuses on building future-ready AI systems that scale
            responsibly and perform reliably in real operational environments.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {capabilities.map((capability, index) => {
            // Card 1: Dark gradient (red/orange to dark)
            // Card 2: Background image only (no gradient)
            // Cards 0 and 3: Dark gray background with very minimal light orange gradient
            const isGradientCard = index === 1;
            
            return (
              <div
                key={capability.title}
                className="p-6 sm:p-8 group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: isGradientCard 
                    ? "linear-gradient(135deg, rgba(139, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%)"
                    : index === 2
                    ? "rgba(0, 0, 0, 0.6)" // Dark background for card 2 to show image better
                    : "rgba(30, 30, 30, 0.8)", // Base dark background for cards 0 and 3
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "translateY(0) scale(1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(253, 80, 9, 0.3), 0 0 0 1px rgba(253, 80, 9, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(253, 80, 9, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                {/* Very minimal light orange gradient for cards 0 and 3 */}
                {(index === 0 || index === 3) && (
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(253, 80, 9, 0.04) 0%, rgba(253, 80, 9, 0.015) 100%)",
                      opacity: 1
                    }}
                  />
                )}
                
                {/* Background image for card 2 (no gradient overlay) */}
                {index === 2 && (
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundImage: `url(${heroBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.3
                    }}
                  />
                )}
                
                {/* Gradient overlay for gradient cards (only for card 1) */}
                {index === 1 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl opacity-100" />
                )}
              
              <div className="relative z-10">
                {/* Icons */}
                <div className="mb-6">
                  <capability.icon className="w-12 h-12 text-primary" />
                </div>

                <div>
                  <h3 
                    style={{
                      color: "#FAFAFA",
                      fontFamily: '"Public Sans", sans-serif',
                      fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "1.3",
                      marginBottom: "8px"
                    }}
                  >
                    {capability.title}
                  </h3>
                  <p 
                    style={{
                      color: "#777777",
                      textAlign: "left",
                      fontFamily: '"Public Sans", sans-serif',
                      fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "1.6"
                    }}
                    className="md:text-justify"
                  >
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
