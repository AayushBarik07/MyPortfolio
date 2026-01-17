import React, { useEffect, useState } from 'react';

const HomeSection = () => {
  const text = "I'm Aayush Barik";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // typing speed (ms)

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden" id="home">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        
        <div className="mb-8 mt-5 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl animate-pulse"></div>
            <img 
              src="/AB.jpeg" 
              alt="Aayush Barik" 
              className="relative rounded-3xl w-50 h-50 md:w-50 md:h-50 object-cover border-2 border-white/10 p-1"
            />
          </div>
        </div>
        
        <div className="mb-8cle overflow-hidden">
          <p className="text-amber-500 font-light tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
            Welcome
          </p>

          <h1 className="text-5xl md:text-7xl font-thin text-white mb-4 tracking-tight">
            {displayText.startsWith("I'm ") ? (
              <>
                I&apos;m{" "}
                <span className="font-light bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  {displayText.replace("I'm ", "")}
                </span>
              </>
            ) : (
              displayText
            )}
            <span className="animate-pulse">|</span>
          </h1>

          {/* <h1 className="text-5xl md:text-7xl font-thin text-white mb-4 tracking-tight">
            I'm <span className="font-light bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Aayush Barik</span>
          </h1> */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-5"></div>
        </div>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed font-light">
          A passionate Web Developer crafting dynamic and responsive web applications. 
          Currently expanding my expertise to become a Full Stack Developer, 
          dedicated to creating user-friendly and accessible, AI-driven, performance-optimized digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href="#projects" 
            className="group relative px-10 py-4 overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            <span className="relative flex items-center justify-center text-white font-light tracking-wider uppercase text-sm">
              View Projects
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </a>
          
          <a 
            href="#contact" 
            className="group relative px-10 py-4 border border-white/20 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative text-white font-light tracking-wider uppercase text-sm">
              Get in Touch
            </span>
          </a>
        </div>
        
        <div className="flex space-x-8 mt-16">
          <a href="https://github.com/AayushBarik07" className="text-gray-500 hover:text-amber-500 transition-all duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a href="https://x.com/aayush_barik?t=bWm06lh1NO0qEkfc4KMJpg&s=09" className="text-gray-500 hover:text-amber-500 transition-all duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.5 3h3.4l4.6 6.6L17.8 3H21l-6.8 9.3L21.5 21h-3.5l-5-7.1L7 21H3.5l7.3-10L4.5 3z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aayush-barik-49882b247/" className="text-gray-500 hover:text-amber-500 transition-all duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;