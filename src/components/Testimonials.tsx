import React from 'react';
import { Star } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    name: 'Sarah Johnson',
    company: 'Johnson Retail Solutions',
    quote: 'Lynda Bookkeeping transformed our financial management. Their attention to detail and proactive approach has saved us both time and money.',
    rating: 5
  }, {
    name: 'Michael Chen',
    company: 'Chen Technology',
    quote: 'Working with Lynda has been a game-changer for our business. Their expertise in tax planning alone has more than paid for their services.',
    rating: 5
  }, {
    name: 'Rebecca Martinez',
    company: 'Martinez Consulting',
    quote: "I can't recommend Lynda Bookkeeping enough. They've provided us with clear financial insights that have helped us make better business decisions.",
    rating: 5
  }];
  return <section id="testimonials" className="py-16 bg-blue-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've
            helped
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-gray-600 text-sm">{testimonial.company}</div>
            </div>)}
        </div>
      </div>
    </section>;
};