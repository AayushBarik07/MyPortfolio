import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Aayush-Barik-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience" , label: "Experience" },
    { href: "#certifications" , label: "Certifications" },
    { href: "#contact", label: "Contact" },
    { href: "#resume", label: "Resume", onClick: () => handleDownload() }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3 group">
              {/* <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img src="/logo.jpeg" className='relative w-10 h-10 rounded-lg' alt="Logo" />
              </div> */}
              <span className="font-serif ... text-white font-semibold text-3xl tracking-wider hidden sm:block">A B</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  onClick={link.onClick}
                  className="relative text-gray-300 font-light tracking-wide text-sm uppercase hover:text-white transition-all duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li className="ml-6">
              <a 
                href="#contact" 
                className="relative px-8 py-3 text-sm uppercase tracking-wider font-light text-white overflow-hidden group border border-white/20 hover:border-amber-500/50 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative">Let's Talk</span>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-amber-500 focus:outline-none transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-px bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-px bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <ul className="container mx-auto px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href}
                onClick={() => {
                  link.onClick && link.onClick();
                  setIsMenuOpen(false);
                }}
                className="block py-3 text-gray-300 uppercase tracking-wider text-sm hover:text-amber-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a 
              href="#contact" 
              className="block w-full text-center py-3 uppercase tracking-wider text-sm text-white border border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;