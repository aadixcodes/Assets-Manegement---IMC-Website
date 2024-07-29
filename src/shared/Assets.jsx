'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Assets = () => {
  // Define office data using an array of objects
  const [offices, setOffices] = useState([
    {
      id: 1,
      name: 'Indore Municipal Corporation, Indore',
      employees: 50,
      location: 'Indore',
      budgetAllotment: '₹2,00,000',
      budgetSpending: '₹10,00,000',
      rating: '4.7/5',
      directionsLink: 'https://www.google.com/maps/dir//22.7226818,75.8621202/@22.722591,75.779591,12z?entry=ttu',
    },
    {
      id: 2,
      name: 'Nagar Parishad Betma',
      employees: 50,
      location: 'Indore',
      budgetAllotment: '₹2,00,000',
      budgetSpending: '₹10,00,000',
      rating: '4.7/5',
      directionsLink: 'https://www.google.com/maps/dir//22.7102,75.7072/@22.7101216,75.6244955,12z?entry=ttu',
    },
    {
      id: 3,
      name: 'Nagar Parishad Depalpur',
      employees: 50,
      location: 'Indore',
      budgetAllotment: '₹2,00,000',
      budgetSpending: '₹10,00,000',
      rating: '4.7/5',
      directionsLink: 'https://www.google.com/maps/dir//22.9866,75.5192',
    },
    {
      id: 4,
      name: 'Nagar Parishad Goutampura',
      employees: 50,
      location: 'Indore',
      budgetAllotment: '₹2,00,000',
      budgetSpending: '₹10,00,000',
      rating: '4.7/5',
      directionsLink: 'https://www.google.com/maps/dir//22.9866,75.5192',
    },
    {
      id: 5,
      name: 'Nagar Parishad Hatod',
      employees: 50,
      location: 'Indore',
      budgetAllotment: '₹2,00,000',
      budgetSpending: '₹10,00,000',
      rating: '4.7/5',
      directionsLink: 'https://www.google.com/maps/dir//22.9866,75.5192',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter offices based on the search term
  const filteredOffices = offices.filter((office) =>
    office.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {/* Search Box */}
      <div className="border border-black rounded inline-flex items-center p-2 mb-5">
        <input
          type="text"
          placeholder="Search for offices"
          className="outline-none px-2 py-1 text-sm w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded ml-2 text-sm">
          Search
        </button>
      </div>

      {/* Profile Cards */}
      <div
        className={`${
          filteredOffices.length === 1
            ? 'flex justify-center items-center w-full'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'
        }`}
      >
        {filteredOffices.map((office) => (
          <div
            key={office.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <form className="w-full">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-center mb-2">
                  {office.name}
                </h1>
                <div className="flex flex-col space-y-2">
                  <label className="flex justify-between items-center">
                    <span className="font-medium">Employees:</span>
                    <input
                      type="text"
                      value={office.employees}
                      readOnly
                      className="border border-gray-300 px-2 py-1 w-1/2 rounded text-right bg-gray-50 focus:outline-none"
                    />
                  </label>
                  <label className="flex justify-between items-center">
                    <span className="font-medium">Location:</span>
                    <input
                      type="text"
                      value={office.location}
                      readOnly
                      className="border border-gray-300 px-2 py-1 w-1/2 rounded text-right bg-gray-50 focus:outline-none"
                    />
                  </label>
                  <label className="flex justify-between items-center">
                    <span className="font-medium">Budget Allotment:</span>
                    <input
                      type="text"
                      value={office.budgetAllotment}
                      readOnly
                      className="border border-gray-300 px-2 py-1 w-1/2 rounded text-right bg-gray-50 focus:outline-none"
                    />
                  </label>
                  <label className="flex justify-between items-center">
                    <span className="font-medium">Budget Spending:</span>
                    <input
                      type="text"
                      value={office.budgetSpending}
                      readOnly
                      className="border border-gray-300 px-2 py-1 w-1/2 rounded text-right bg-gray-50 focus:outline-none"
                    />
                  </label>
                  <label className="flex justify-between items-center">
                    <span className="font-medium">Rating:</span>
                    <input
                      type="text"
                      value={office.rating}
                      readOnly
                      className="border border-gray-300 px-2 py-1 w-1/2 rounded text-right bg-gray-50 focus:outline-none"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <Link href="/assetdetails">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md transition duration-300">
                    Click to track
                  </button>
                </Link>
                <Link href={office.directionsLink}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow-md transition duration-300">
                    Directions
                  </button>
                </Link>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;


