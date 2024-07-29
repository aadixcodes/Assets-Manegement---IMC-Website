import React from 'react';

const municipalitiesData = [
  {
    title: "Indore Municipal Corporation, Indore",
    address: "Jail Road, Nagar Nigam, Netaji Subash Marg, Nagar Nigam, Indore, Madhya Pradesh 452007",
    email: "imcindore[at]mpurban[dot]gov[dot]in",
    phone: "",
    website: "https://imcindore.mp.gov.in/",
    pincode: "452007",
  },
  {
    title: "Nagar Parishad Betma",
    address: "Nagar Parishad Betma",
    email: "cmohetma[at]mpurban[dot]gov[dot]in",
    phone: "07322260224",
    website: "https://indore.nic.in/en/public-utility/nagar-parishad-betma/",
    pincode: "453001",
  },
  {
    title: "Nagar Parishad Depalpur",
    address: "Nagar Parishad Depalpur, District Indore",
    email: "cmodepalpur[at]mpurban[dot]gov[dot]in",
    phone: "07322-220223",
    website: "https://indore.nic.in/en/public-utility/nagar-parishad-depalpur/",
    pincode: "452001",
  },
  {
    title: "Nagar Parishad Gautampura",
    address: "Nagar Parishad Gautampura, District Indore",
    email: "cmogautampura[at]mpurban[dot]gov[dot]in",
    phone: "07322-230252",
    website: "https://indore.nic.in/en/public-utility/nagar-parishad-goutampura/",
    pincode: "453220",
  },
  {
    title: "Nagar Parishad Rau",
    address: "Nagar Parishad Rau, District Indore",
    email: "cmorau[at]mpurban[dot]gov[dot]in",
    phone: "0731-248258",
    website: "https://indore.nic.in/public-utility/%E0%A4%A8%E0%A4%97%E0%A4%B0-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B7%E0%A4%A6-%E0%A4%B0%E0%A4%BE%E0%A4%8A/",
    pincode: "453331",
  },
  {
    title: "Nagar Parishad Sanwer",
    address: "Nagar Parishad Sanwer, District Indore",
    email: "cmosanwer[at]mpurban[dot]gov[dot]in",
    phone: "07312200270",
    website: "https://indore.nic.in/en/public-utility/nagar-parishad-sanwer/",
    pincode: "452001",
  },
];

const Municipalities = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Municipalities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {municipalitiesData.map((municipality, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{municipality.title}</h2>
            <p className="text-gray-700 mb-2">{municipality.address}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Email:</span> {municipality.email}
            </p>
            {municipality.phone && (
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Phone:</span> {municipality.phone}
              </p>
            )}
            
            <p className="text-gray-700 mb-4">
              <span className="font-bold">Pincode:</span> {municipality.pincode}
            </p>
            {/* <a href={municipalitiesData.website} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Directions
            </a> */}
            {municipality.website && (
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Website Link:</span>{" "}
                <a
                  href={municipality.website}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Municipalities;
