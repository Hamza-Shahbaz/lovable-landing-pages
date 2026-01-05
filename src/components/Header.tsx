import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Our Clients", href: "#clients" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        setIsScrolled(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  console.log(window.location.href.split("/").pop());

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
            isScrolled
              ? "bg-white backdrop-blur-md shadow-xl"
              : "bg-white"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-full h-10" />
              </a>

              {/* Desktop Navigation 
              highliught selected item
              when selected add underline and color to text-primary
              underline should be yellow and should be 2px thick with space of 5px
              new div line with yellow color and 2px thick with space of 5px only when is selected
              */}

              <nav className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-foreground/80 hover:text-primary transition-colors text-sm font-medium ${item.href === window.location.href.split("/").pop() ? "text-primary" : ""}`}
                  >
                    {item.label}
                    {item.href === window.location.href.split("/").pop() && (
                      <div className="h-1 bg-primary w-full" />
                    )}
                  </a>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
                  Get A Quote
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-foreground p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden bg-card border-t border-border"
                >
                  <div className="py-4 space-y-3">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <div className="px-4 pt-2">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                        Get A Quote
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
