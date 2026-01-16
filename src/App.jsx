import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectSection';
import Experience from './components/Experience';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="w-screen h-screen flex flex-col min-h-screen bg-zinc-900 text-white">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        <ProjectsSection />
        <Experience />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;