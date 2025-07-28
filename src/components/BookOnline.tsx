import React from 'react';
export const BookOnline = () => {
  const services = [{
    title: 'Free Consultation',
    duration: '30 min',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Initial consultation to discuss your bookkeeping needs'
  }, {
    title: 'QuickBooks Training',
    duration: '1 hr',
    price: '$100',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Learn how to effectively use QuickBooks for your business'
  }, {
    title: 'Financial Checkup',
    duration: '45 min',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Review of your current financial status and recommendations'
  }];
  return <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a service below to book your session with Lynda Bookkeeping
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <div className="w-full h-px bg-gray-200 my-3"></div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-col space-y-2 mb-6">
                  <div className="text-gray-700">
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="text-gray-700">
                    <span className="font-medium">{service.price}</span>
                  </div>
                </div>
                <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded transition-colors w-full">
                  Book Now
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};