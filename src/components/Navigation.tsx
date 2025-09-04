import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BOOK TABLE', path: '/book' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-restaurant-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-restaurant-primary italic">
            Feane
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-restaurant-primary'
                    : 'text-restaurant-text hover:text-restaurant-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side icons & Order button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost-white" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost-white" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="order" className="ml-4">
              Order Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost-white"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-restaurant-dark-lighter rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-restaurant-primary'
                      : 'text-restaurant-text hover:text-restaurant-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-2 px-3 py-2">
                <Button variant="ghost-white" size="icon">
                  <User className="h-4 w-4" />
                </Button>
                <Button variant="ghost-white" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button variant="order" className="flex-1">
                  Order Online
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;