import React from 'react';
import { CheckCircle } from 'lucide-react';
export const About = () => {
  const benefits = ['Over 15 years of accounting experience', 'Personalized service tailored to your needs', 'Timely and accurate financial reporting', 'Advanced technology for seamless processes', 'Dedicated support whenever you need it', 'Transparent pricing with no hidden fees'];
  return <section id="about" className="py-16 w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Lynda Bookkeeping
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're dedicated to providing exceptional bookkeeping and
              accounting services that help businesses like yours succeed. Our
              team of experienced professionals is committed to accuracy,
              timeliness, and personalized service.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a small business owner, a growing company, or an
              established enterprise, we have the expertise to handle your
              financial needs so you can focus on what you do best.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>)}
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Approach
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  1. Understand
                </h4>
                <p className="text-gray-600">
                  We take the time to understand your business, goals, and
                  specific financial needs.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  2. Customize
                </h4>
                <p className="text-gray-600">
                  We create a tailored solution that addresses your unique
                  challenges and requirements.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  3. Implement
                </h4>
                <p className="text-gray-600">
                  We set up efficient systems and processes to manage your
                  financial information.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  4. Support
                </h4>
                <p className="text-gray-600">
                  We provide ongoing support and advice to help your business
                  grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};