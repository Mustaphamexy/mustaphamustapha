import { useState } from 'react';
import { IoMenu, IoCloseSharp  } from "react-icons/io5";


const Header = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'resume', label: 'Resume' },
    { id: 'project', label: 'Project' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-background/10">
      <nav className="max-w-8xl mx-auto px-6 md:px-12 lg:px-24 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl md:text-3xl font-extrabold">
            Mustapha
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-lg transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-primary font-semibold' 
                      : 'text-gray-300 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-background rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoCloseSharp size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-center text-lg transition-colors duration-300 py-2 px-4 rounded-lg cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-primary font-semibold bg-background' 
                      : 'text-white hover:text-purple-400 hover:bg-background'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;