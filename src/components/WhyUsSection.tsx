import image1 from "@/assets/Background+Overlay+Shadow+OverlayBlur (1).png";
import image2 from "@/assets/Background+Overlay+Shadow+OverlayBlur (2).png";
import image3 from "@/assets/Background+Overlay+Shadow+OverlayBlur (3).png";

const images = [
  image1,
  image2,
  image3,
];

export const WhyUsSection = () => {
  return (
    <section className="section-padding bg-background noise-overlay">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          <h2 
            style={{
              alignSelf: "stretch",
              color: "#FAFAFA",
              textAlign: "center",
              fontFamily: '"Public Sans", sans-serif',
              fontSize: "clamp(1.75rem, 4vw, 2.625rem)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.2"
            }}
            className="mb-4 px-2"
          >
            Why <span 
              style={{
                background: "linear-gradient(180deg, #FD5009 0%, #EF1005 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Public Sans", sans-serif',
                fontSize: "clamp(1.75rem, 4vw, 2.625rem)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "1.2"
              }}
            >
              RAMA AI
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
            Our approach combines culture, ethics, and engineering to deliver practical AI
            solutions that scale responsibly across industries and communities.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: "clamp(1rem, 3vw, 1.5rem)" }}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                borderRadius: "clamp(1rem, 2vw, 1.25rem)",
                overflow: "hidden",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1 / 1",
                minHeight: "clamp(12rem, 30vw, 20rem)"
              }}
            >
              <img 
                src={image} 
                alt={`Feature ${index + 1}`}
                style={{ 
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
