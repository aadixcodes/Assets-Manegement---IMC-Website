

// 'use client';
// import Link from "next/link";
// import React from "react";
// import { FaArrowLeft } from "react-icons/fa";

// // Asset data
// const assetData = {
//   officeName: "Downtown Office",
//   movableAssets: [
//     { id: 1, name: "Vehicles " },
//     { id: 2, name: "Projector" },
//     { id: 3, name: "Helmets" },
//     { id: 4, name: "Printer" },
//   ],
//   nonMovableAssets: [
//     { id: 5, name: "Parks" },
//     { id: 6, name: "Buildings" },
//     { id: 7, name: "Houses" },
//     { id: 8, name: "Houses" },
//   ],
// };

// const AssetsDetails = () => {
//   // Define a back function
//   const handleBackClick = () => {
//     window.history.back();
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
//       <div className="w-full min-h-screen bg-gray-100 p-5">
//         {/* Header */}
//         <div className="flex items-center justify-between bg-white py-3 px-4 rounded-t-lg shadow">
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={handleBackClick}
//               className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
//             >
//               <FaArrowLeft className="inline-block text-xl mr-2" />
//             </button>
//             <h1 className="text-2xl font-semibold">{assetData.officeName}</h1>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="w-full flex flex-col lg:flex-row h-full gap-4 mt-4">

//           {/* Movable Assets Section */}
//           <div className="flex-1 w-full lg:w-1/2 overflow-auto border border-gray-300 rounded-lg shadow bg-white">
//             <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white z-10 border-b border-gray-200">
//               <h1 className="text-lg font-medium">Movable Assets</h1>
//               <div className="border border-gray-300 rounded-md inline-flex items-center">
//                 <input
//                   type="text"
//                   placeholder="Search for assets"
//                   className="outline-none px-2 py-1 text-sm w-56"
//                 />
//                 <button className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600 transition-colors duration-200 text-sm">
//                   Search
//                 </button>
//               </div>
//             </div>

//             {/* Movable Assets List */}
//             <div className="divide-y divide-gray-200">
//               {assetData.movableAssets.map((asset) => (
//                 <div
//                   key={asset.id}
//                   className="flex justify-between items-center px-4 py-3"
//                 >
//                   <p className="text-gray-700">{asset.name}</p>
//                   <Link
//                     href="/track"
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200 text-sm"
//                   >
//                     Track
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Non-Movable Assets Section */}
//           <div className="flex-1 w-full lg:w-1/2 overflow-auto border border-gray-300 rounded-lg shadow bg-white">
//             <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white z-10 border-b border-gray-200">
//               <h1 className="text-lg font-medium">Non-Movable Assets</h1>
//               <div className="border border-gray-300 rounded-md inline-flex items-center">
//                 <input
//                   type="text"
//                   placeholder="Search for assets"
//                   className="outline-none px-2 py-1 text-sm w-56"
//                 />
//                 <button className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600 transition-colors duration-200 text-sm">
//                   Search
//                 </button>
//               </div>
//             </div>

//             {/* Non-Movable Assets List */}
//             <div className="divide-y divide-gray-200">
//               {assetData.nonMovableAssets.map((asset) => (
//                 <div
//                   key={asset.id}
//                   className="flex justify-between items-center px-4 py-3"
//                 >
//                   <p className="text-gray-700">{asset.name}</p>
//                   <Link
//                     href="/track"
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200 text-sm"
//                   >
//                     Track
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssetsDetails;


'use client';
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

// Asset data
const assetData = {
  officeName: "Downtown Office",
  movableAssets: [
    { id: 1, name: "Vehicles", assigned: "John Doe" },
    { id: 2, name: "Projector", assigned: "Jane Smith" },
    { id: 3, name: "Helmets", assigned: "Mike Johnson" },
    { id: 4, name: "Printer", assigned: "Emily Davis" },
  ],
  nonMovableAssets: [
    { id: 5, name: "Parks"},
    { id: 6, name: "Buildings"},
    { id: 7, name: "Houses"},
    { id: 8, name: "Houses"},
  ],
};

const AssetsDetails = () => {
  // Define a back function
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="w-full min-h-screen bg-gray-100 p-5">
        {/* Header */}
        <div className="flex items-center justify-between bg-white py-3 px-4 rounded-t-lg shadow">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleBackClick}
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
            >
              <FaArrowLeft className="inline-block text-xl mr-2" />
            </button>
            <h1 className="text-2xl font-semibold">{assetData.officeName}</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col lg:flex-row h-full gap-4 mt-4">

          {/* Movable Assets Section */}
          <div className="flex-1 w-full lg:w-1/2 overflow-auto border border-gray-300 rounded-lg shadow bg-white">
            <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white z-10 border-b border-gray-200">
              <h1 className="text-lg font-medium">Movable Assets</h1>
              <div className="border border-gray-300 rounded-md inline-flex items-center">
                <input
                  type="text"
                  placeholder="Search for assets"
                  className="outline-none px-2 py-1 text-sm w-56"
                />
                <button className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600 transition-colors duration-200 text-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Movable Assets List */}
            <div className="divide-y divide-gray-200">
              {assetData.movableAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="flex justify-between items-center px-4 py-3"
                >
                  <div>
                    <p className="text-gray-700">{asset.name}</p>
                    <p className="text-sm text-gray-500">Assigned: {asset.assigned}</p>
                  </div>
                  <Link
                    href="/track"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200 text-sm"
                  >
                    Track
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Movable Assets Section */}
          <div className="flex-1 w-full lg:w-1/2 overflow-auto border border-gray-300 rounded-lg shadow bg-white">
            <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white z-10 border-b border-gray-200">
              <h1 className="text-lg font-medium">Non-Movable Assets</h1>
              <div className="border border-gray-300 rounded-md inline-flex items-center">
                <input
                  type="text"
                  placeholder="Search for assets"
                  className="outline-none px-2 py-1 text-sm w-56"
                />
                <button className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600 transition-colors duration-200 text-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Non-Movable Assets List */}
            <div className="divide-y divide-gray-200">
              {assetData.nonMovableAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="flex justify-between items-center px-4 py-3"
                >
                  <div>
                    <p className="text-gray-700">{asset.name}</p>
                    {/* <p className="text-sm text-gray-500">Assigned: {asset.assigned}</p> */}
                  </div>
                  <Link
                    href="/track"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200 text-sm"
                  >
                    Track
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsDetails;
