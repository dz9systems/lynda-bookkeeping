import React from 'react';
import { Calculator, FileSpreadsheet, BarChart3, DollarSign, FileText, Users, PieChart, Clock } from 'lucide-react';
export const Services = () => {
  const services = [{
    icon: <Calculator className="w-10 h-10 text-blue-600" />,
    title: 'Bookkeeping',
    description: 'Accurate and timely recording of all financial transactions.'
  }, {
    icon: <FileSpreadsheet className="w-10 h-10 text-blue-600" />,
    title: 'Financial Statements',
    description: 'Preparation of balance sheets, income statements, and cash flow reports.'
  }, {
    icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    title: 'Business Analysis',
    description: 'Insights and recommendations based on your financial data.'
  }, {
    icon: <DollarSign className="w-10 h-10 text-blue-600" />,
    title: 'Tax Filing',
    description: 'Preparation and filing of business and personal tax returns.'
  }, {
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    title: 'Payroll Services',
    description: 'Complete payroll processing and tax reporting solutions.'
  }, {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'Financial Training',
    description: 'Training for your team on financial best practices.'
  }, {
    icon: <PieChart className="w-10 h-10 text-blue-600" />,
    title: 'Budgeting & Forecasting',
    description: 'Development of financial projections and budgets.'
  }, {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: 'Monthly Reporting',
    description: 'Regular financial updates to keep you informed.'
  }];
  return <section id="services" className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions to help your business thrive
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};