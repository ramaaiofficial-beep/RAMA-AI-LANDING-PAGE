import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="section-padding cta-gradient noise-overlay relative overflow-hidden">
      {/* Decorative elements */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(253, 80, 9, 0.15) 0%, rgba(253, 80, 9, 0.05) 50%, transparent 100%)"
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            style={{
              alignSelf: "stretch",
              color: "#FAFAFA",
              textAlign: "center",
              fontFamily: '"Spline Sans", sans-serif',
              fontSize: "clamp(1.75rem, 4vw, 2.625rem)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "1.2",
              marginBottom: "24px"
            }}
            className="px-2"
          >
            Experience the Future of
            <br />
            Human-AI Interaction
          </h2>
          <p 
            style={{
              alignSelf: "stretch",
              color: "#777777",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.6",
              marginBottom: "40px",
              maxWidth: "672px",
              marginLeft: "auto",
              marginRight: "auto",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.6)",
              letterSpacing: "0.01em"
            }}
            className="px-4"
          >
            Our platform seamlessly integrates learning, wellness, and
            engagement into one intelligent companion that grows with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="heroOutline" size="xl" asChild>
              <a 
                href="#contact"
                style={{
                  color: "#FAFAFA",
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: "12px",
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
    </section>
  );
};
