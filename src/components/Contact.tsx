import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to us today.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Our Office</p>
                    <p className="text-gray-600">
                      123 Financial Street, Suite 456
                    </p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@lyndabookkeeping.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Subscribe to Our Newsletter
                </h4>
                <div className="flex">
                  <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your email" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Subject" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};