import React from 'react';
export const Hero = () => {
  return <section id="home" className="relative w-full bg-gray-900 text-white">
      <div className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      opacity: '0.7'
    }} />
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          Lynda Bookkeeping
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-blue-300">
          The Leading Bookkeeping Service in San Francisco
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Get Started
          </a>
          <a href="#services" className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-3 px-6 rounded-md transition-colors">
            Our Services
          </a>
        </div>
      </div>
    </section>;
};