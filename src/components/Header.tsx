import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

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
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Free Risk Snapshot", href: "https://rs.darrinduncan.com/" },
    { label: "Request Audit", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent py-2"
      }`}
    >
      <nav className="container mx-auto px-10 py-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Darrin Duncan" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
{navItems.map((item, index) => {
        const isLast = index === navItems.length - 1;
      const isNextToLast = index === navItems.length - 2;

      const baseClasses = "border-gray border hover:border-primary hover:bg-primary/90 hover:text-white rounded-md p-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"

      if(isNextToLast) {
        return (
          <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          >
            {item.label}
          </a>
        )
      }


return (
  
  <NavLink
    key={item.label}
    to={item.href}
    className={({ isActive }) => {

      return `
        text-sm font-medium transition-colors duration-200
        ${isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"}
        ${isLast ? "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium" : ""}
      `;
    }}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    {item.label}
  </NavLink>
)
}
)}
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
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
{navItems.map((item, index) => {
        const isLast = index === navItems.length - 1;
      const isNextToLast = index === navItems.length - 2;

      const baseClasses = "border-gray border hover:border-primary hover:bg-primary/90 hover:text-white rounded-md p-2 text-sm text-center font-medium text-primary hover:text-primary/80 transition-colors duration-200"

      if(isNextToLast) {
        return (
          <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          >
            {item.label}
          </a>
        )
      }


return (
  
  <NavLink
    key={item.label}
    to={item.href}
    className={({ isActive }) => {

      return `
        border-gray border p-2 rounded-md text-center text-sm font-medium transition-colors duration-200
        ${isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"}
        ${isLast ? "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md px-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium" : ""}
      `;
    }}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    {item.label}
  </NavLink>
)
}
)}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
