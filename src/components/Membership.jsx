import React from 'react';

const Membership = () => {
  return (
    <div className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Join Our Community</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Become part of a global network of poultry professionals dedicated to excellence in the industry
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl max-w-4xl mx-auto p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Membership Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Access to exclusive research and publications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Discounts on conferences and training programs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Networking opportunities with industry leaders</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Technical support and advisory services</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Quarterly industry reports and market analysis</span>
                </li>
              </ul>
              <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md">
                Apply Now
              </button>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="bg-amber-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">1,500+ Members</h3>
                <p className="text-gray-600">Join our growing community of poultry professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;