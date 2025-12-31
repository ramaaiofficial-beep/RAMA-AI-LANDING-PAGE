import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero section bg.png";

const programs = [
  {
    icon: GraduationCap,
    title: "Internship Program",
    description: "Hands-on experience building next-generation AI solutions. For current students passionate about AI and human impact.",
    gradient: true,
  },
  {
    icon: GraduationCap,
    title: "Graduate Program",
    description: "Fast-track your career in AI research and development. For recent graduates ready to make an impact.",
    gradient: false,
  },
];

const steps = [
  { number: "01", title: "Apply", description: "Submit your application and tell us your story." },
  { number: "02", title: "Review", description: "Our team reviews your background and passion." },
  { number: "03", title: "Interview", description: "Conversation-based interviews to understand your fit." },
  { number: "04", title: "Welcome", description: "Join the RAMA AI family and start your journey." },
];

export const CareersSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="careers" className="section-padding bg-background noise-overlay">
      <div className="container-custom">
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
              lineHeight: "1.2",
              marginBottom: "16px"
            }}
            className="px-2"
          >
            Internship & Graduate Programs
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
            Join a team that's redefining the relationship between humans and AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Programs */}
          <div className="space-y-6">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`rounded-2xl border cursor-pointer ${
                  program.gradient
                    ? ""
                    : "p-8 bg-card border-border/50"
                }`}
                style={
                  program.gradient
                    ? {
                        display: "flex",
                        padding: "24px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "10px",
                        alignSelf: "stretch",
                        borderRadius: "20px",
                        backgroundImage: `url(${heroBg}), linear-gradient(180deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 10, 10, 0.9) 100%)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: "translateY(0) scale(1)"
                      }
                    : {
                        display: "flex",
                        padding: "24px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "10px",
                        alignSelf: "stretch",
                        borderRadius: "20px",
                        backgroundImage: `url(${heroBg}), linear-gradient(180deg, rgba(26, 26, 26, 0.9) 0%, rgba(26, 15, 15, 0.9) 100%)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: "translateY(0) scale(1)"
                      }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = program.gradient
                    ? "0 20px 40px rgba(253, 80, 9, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                    : "0 20px 40px rgba(253, 80, 9, 0.3), 0 0 0 1px rgba(253, 80, 9, 0.2)";
                  e.currentTarget.style.borderColor = program.gradient
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(253, 80, 9, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = program.gradient
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div 
                  style={{
                    display: "flex",
                    width: "58px",
                    height: "58px",
                    padding: "15px 16px",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "8px",
                    background: "#FFF",
                    boxShadow: "0 0 0 1px rgba(41, 0, 41, 0.1)",
                    backdropFilter: "blur(10px)",
                    marginBottom: "16px"
                  }}
                >
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 
                  style={{
                    alignSelf: "stretch",
                    color: "#FFF",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.3",
                    marginBottom: "12px",
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.8)",
                    letterSpacing: "0.01em"
                  }}
                >
                  {program.title}
                </h3>
                <p 
                  style={{
                    alignSelf: "stretch",
                    color: "#777777",
                    textAlign: "left",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.6",
                    marginBottom: "24px",
                    textShadow: "0 1px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.6)",
                    letterSpacing: "0.01em"
                  }}
                  className="md:text-justify"
                >
                  {program.description}
                </p>
                <Button 
                  variant="glass" 
                  size="lg"
                  onClick={() => navigate("/apply")}
                  style={{
                    display: "flex",
                    height: "40px",
                    padding: "8px 24px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "8px",
                    border: "1px solid #FD5009",
                    background: "rgba(253, 80, 9, 0.2)",
                    color: "#FFF",
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    alignSelf: "flex-start",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(253, 80, 9, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(253, 80, 9, 0.5)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(253, 80, 9, 0.2)";
                    e.currentTarget.style.borderColor = "#FD5009";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

          {/* Application Process */}
          <div>
            <h3 
              style={{
                color: "#FFF",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "1.3",
                marginBottom: "32px"
              }}
            >
              Application Process
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "56px",
                alignSelf: "stretch"
              }}
            >
              {steps.map((step, index) => (
                <div key={step.number}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span 
                        style={{
                          color: "#FD5009",
                          fontFamily: '"Public Sans", sans-serif',
                          fontSize: "28px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "normal"
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h4 
                        style={{
                          color: "#FFF",
                          fontFamily: '"Public Sans", sans-serif',
                          fontSize: "clamp(1rem, 2vw, 1.25rem)",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "1.4",
                          marginBottom: "8px"
                        }}
                      >
                        {step.title}
                      </h4>
                      <p 
                        style={{
                          color: "#777777",
                          textAlign: "left",
                          fontFamily: '"Public Sans", sans-serif',
                          fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "1.6",
                          marginBottom: "24px"
                        }}
                        className="md:text-justify"
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      style={{
                        marginTop: "24px",
                        marginBottom: "32px",
                        height: "1px",
                        background: "rgba(255, 255, 255, 0.1)",
                        width: "100%"
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
