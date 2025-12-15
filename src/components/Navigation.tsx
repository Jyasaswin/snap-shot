import { useState, useEffect } from "react";
import { Bot, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" }
  ];

  const servicesMenu = [
    { id: "fullstack", label: "Full Stack Web Development", href: "/services?service=fullstack" },
    { id: "automation", label: "Automation Solutions", href: "/services?service=automation" },
    { id: "ai-web", label: "AI-Powered Full Stack Websites", href: "/services?service=ai-web" },
    { id: "bots", label: "Bots (With & Without AI)", href: "/services?service=bots" }
  ];
  

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-14 bg-background/80 backdrop-blur-xl border border-border scale-95 w-[90%] max-w-2xl" 
          : "h-14 bg-card border border-border w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-primary" />
            <span className="font-bold text-base">AI Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm transition-all duration-300 ${
                  location.pathname === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                Services
                <span className="text-[10px] leading-none mt-px">
                  {isServicesOpen ? "▲" : "▼"}
                </span>
              </button>
              {isServicesOpen && (
                <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-border bg-card shadow-lg p-2 z-50">
                  {servicesMenu.map((service) => (
                    <Link
                      key={service.id}
                      to={service.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background border-border">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg transition-colors ${
                        location.pathname === item.href
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="mt-4 border-t border-border pt-4">
                    <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                      Services
                    </div>
                    <div className="flex flex-col gap-2">
                      {servicesMenu.map((service) => (
                        <Link
                          key={service.id}
                          to={service.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
