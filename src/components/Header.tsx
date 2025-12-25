import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import Rez from "@/assets/DarrinDuncanResume.pdf";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-8 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold gradient-text">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `text-foreground hover:text-primary transition-colors duration-300 font-medium ${isActive ? 'text-primary' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href={Rez} target="_blank" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-md transition-colors duration-300">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden animate-fade-in">
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={Rez} target="_blank" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full px-4 py-2 rounded-md transition-colors duration-300">
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
