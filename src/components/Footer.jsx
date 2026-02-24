import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-8">

      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-light text-white mb-6">
              Aayush <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Barik</span>
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
              A passionate web developer focused on creating beautiful, 
              functional experiences that solve real problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/AayushBarik07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/aayush-barik-49882b247/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://x.com/aayush_barik?t=bWm06lh1NO0qEkfc4KMJpg&s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 3h3.4l4.6 6.6L17.8 3H21l-6.8 9.3L21.5 21h-3.5l-5-7.1L7 21H3.5l7.3-10L4.5 3z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-light uppercase tracking-wider text-gray-400 mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm font-light flex items-center group">
                  <span className="mr-2 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm font-light flex items-center group">
                  <span className="mr-2 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm font-light flex items-center group">
                  <span className="mr-2 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm font-light flex items-center group">
                  <span className="mr-2 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Resume
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xs font-light uppercase tracking-wider text-gray-400 mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm font-light">Web Development</li>
              <li className="text-gray-500 text-sm font-light">UI/UX Design</li>
              <li className="text-gray-500 text-sm font-light">AI Integration</li>
              <li className="text-gray-500 text-sm font-light">Responsive Solutions</li>
              <li className="text-gray-500 text-sm font-light">Performance Optimization</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-light uppercase tracking-wider text-gray-400 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-3 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:superbsup45@gmail.com" className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm font-light">
                  superbsup45@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-3 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 6.5C2 5.12 3.12 4 4.5 4h1.28c.54 0 1.03.33 1.22.84l1.06 2.83c.18.48.04 1.03-.36 1.37l-1.15 1a14.5 14.5 0 006.29 6.29l1-1.15c.34-.4.89-.54 1.37-.36l2.83 1.06c.51.19.84.68.84 1.22v1.28c0 1.38-1.12 2.5-2.5 2.5H18C9.16 22 2 14.84 2 6v.5z"/>
                </svg>

                <a
                  href="tel:+919110911867"
                  className="text-gray-500 hover:text-amber-500 transition-colors duration-300 text-sm font-light"
                >
                  +91 91109 11867
                </a>
              </li>

              <li className="flex items-start">
                <svg className="w-4 h-4 mr-3 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-500 text-sm font-light">
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 text-xs font-light tracking-wider">
            © {new Date().getFullYear()} Aayush Barik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;