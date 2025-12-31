import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero section bg.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Solutions", href: "#industries" },
  { label: "Careers", href: "#careers" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isHomePage = location.pathname === "/";
    const targetId = href.replace("#", "");
    
    if (isHomePage) {
      // If on home page, just scroll to section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on different page, navigate to home then scroll
      navigate("/", { state: { scrollTo: targetId } });
    }
    setIsMobileMenuOpen(false);
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        // Clear the state to prevent re-scrolling on re-renders
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled 
          ? "rgba(0, 0, 0, 0.4)" 
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: isScrolled 
          ? "1px solid rgba(255, 255, 255, 0.1)" 
          : "none",
        boxShadow: isScrolled 
          ? "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)" 
          : "none",
        paddingTop: "8px",
        paddingBottom: "8px"
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex-shrink-0"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <img src={logo} alt="RAMA AI" className="w-auto" style={{ height: "clamp(1.5rem, 3vw, 3rem)", maxHeight: "80%", objectFit: "contain" }} />
          </a>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex items-center gap-1 relative rounded-full px-2 py-1"
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
              `,
              position: "relative",
              overflow: "hidden"
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
            <div className="relative z-10 flex items-center gap-0.5 sm:gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-white transition-all rounded-full hover:bg-white/5 relative z-10 whitespace-nowrap"
                  style={{
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" className="bg-primary text-primary-foreground border-primary hover:bg-primary/90 text-xs sm:text-sm px-3 sm:px-4" asChild>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl mt-2 p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-foreground hover:bg-secondary rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2 bg-primary text-primary-foreground border-primary hover:bg-primary/90" asChild>
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
