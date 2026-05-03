import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full transition-colors duration-300"
      style={{ background: 'hsl(var(--sidebar-muted) / 0.3)' }}
      aria-label="Toggle theme"
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 bg-primary"
        style={{ transform: theme === 'dark' ? 'translateX(24px)' : 'translateX(0)' }}
      >
        <Sun className="h-3 w-3 text-primary-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
        <Moon className="h-3 w-3 text-primary-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
      </span>
    </button>
  );
}
