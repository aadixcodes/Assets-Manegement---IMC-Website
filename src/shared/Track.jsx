'use client';
import React, { useState } from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";

const assetDetails = {
  imageUrl: "/Assets/car.jpg",
  assetName: "garbage cart",
  employees: "23",
  location: "Downtown Office",
  budgetAllotment: "₹100,000",
  budgetSpending: "₹75,000",
  rating: "4.5",
};

const Track = () => {
  const [comment, setComment] = useState("");

  const handleBackClick = () => {
    window.history.back();
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log("Submitted comment:", comment);
    setComment("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex items-center justify-start mb-4">
          <button
            onClick={handleBackClick}
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
          >
            <FaArrowLeft className="inline-block text-xl mr-2" />
            Back
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={assetDetails.imageUrl}
                alt={assetDetails.assetName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h1 className="text-2xl font-semibold mb-4">{assetDetails.assetName}</h1>
              <div className="space-y-3">
                {Object.entries(assetDetails).map(([key, value]) => {
                  if (key !== 'imageUrl' && key !== 'assetName') {
                    return (
                      <div key={key} className="flex justify-between items-center">
                        <span className="font-medium text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-gray-800">{value}</span>
                      </div>
                    );
                  }
                  return null;
                })}
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(parseFloat(assetDetails.rating)) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </span>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white py-5 rounded-md hover:bg-blue-600 transition-colors duration-200 mt-6">
               <span className="my-2"> Track Asset</span>
              </button>
            </div>
          </div>
          <div className="p-6 border-t">
            <h2 className="text-lg font-semibold mb-2">Add a Comment</h2>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Enter your comment here..."
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;