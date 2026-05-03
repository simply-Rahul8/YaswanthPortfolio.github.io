import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'SUMMARY & STORY' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex sidebar-nav fixed left-0 top-0 h-screen w-72 flex-col justify-between z-50 px-8 py-10">
        {/* Top - Brand */}
        <div>
          <a href="#" className="inline-block mb-2">
            <span className="text-3xl font-bold tracking-tight heading-display" style={{ color: 'hsl(var(--sidebar-foreground))' }}>
              RY.
            </span>
          </a>
          <p className="text-sm mt-4 tracking-wide" style={{ color: 'hsl(var(--sidebar-muted))' }}>
            Full-Stack & AI Developer
          </p>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium tracking-[0.15em] py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom - Resume + Theme */}
        <div className="flex flex-col gap-4">
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <nav className="lg:hidden fixed top-0 w-full z-50 sidebar-nav">
        <div className="flex items-center justify-between px-5 h-16">
          <a href="#" className="text-xl font-bold heading-display" style={{ color: 'hsl(var(--sidebar-foreground))' }}>
            RY.
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border/20 px-5 pb-6"
            >
              <div className="flex flex-col gap-1 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="nav-link text-sm font-medium tracking-[0.15em] py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;
