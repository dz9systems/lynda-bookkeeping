import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookOnline } from './components/BookOnline';
export function App() {
  // Use state to track the current hash
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');
  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#home');
    };
    // Add event listener
    window.addEventListener('hashchange', handleHashChange);
    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  // Render the appropriate component based on the hash
  const renderContent = () => {
    switch (currentHash) {
      case '#book-online':
        return <BookOnline />;
      default:
        return <>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
          </>;
    }
  };
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-grow">{renderContent()}</main>
      <Footer />
    </div>;
}