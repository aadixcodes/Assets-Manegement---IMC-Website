import React from 'react';

const OverviewAndServices = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Overview Section */}
          <div className="lg:w-1/2 p-6">
            <h2 className="text-center text-2xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              OVERVIEW
            </h2>
            <p className="text-center text-gray-700 text-lg lg:text-xl leading-relaxed">
              Indore Municipal Corporation (IMC) is the governing body of the city of Indore in the Indian state of Madhya Pradesh. 
              The municipal corporation consists of democratically elected members, is headed by a mayor and administers the city’s 
              infrastructure and public services. Members from the state’s leading various political parties hold elected offices 
              in the corporation. It is the richest Municipal corporation in terms of revenue generated in the state of Madhya Pradesh.
            </p>
          </div>

          {/* Online Services Section */}
          <div className="lg:w-1/2 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-center text-2xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              ONLINE SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Item */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <img src="path_to_swm_icon" alt="SWM" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">SWM</h3>
                <p className="text-gray-700 mb-4">
                  Indore excels in solid waste management with innovative practices, citizen...
                </p>
                <a href="#" className="text-blue-500 hover:underline">Explore</a>
              </div>

              {/* Service Item */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <img src="path_to_property_tax_icon" alt="Property Tax" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Property Tax</h3>
                <p className="text-gray-700 mb-4">
                  Indore prioritizes efficient tax management, ensuring fair collection,...
                </p>
                <a href="#" className="text-blue-500 hover:underline">Explore</a>
              </div>

              {/* Service Item */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <img src="path_to_water_charges_icon" alt="Water Charges" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Water Charges</h3>
                <p className="text-gray-700 mb-4">
                  Indore water charges ensure sustainable usage. Fair pricing encourages...
                </p>
                <a href="#" className="text-blue-500 hover:underline">Explore</a>
              </div>

              {/* Service Item */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-100 rounded-full mb-4">
                  <img src="path_to_business_icon" alt="Business" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
                <p className="text-gray-700 mb-4">
                  Thriving businesses in Indore, the heart of commerce, blend tradition with...
                </p>
                <a href="#" className="text-blue-500 hover:underline">Explore</a>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewAndServices;
