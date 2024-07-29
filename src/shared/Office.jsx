// "use client";
// import Link from 'next/link';
// import React, { useState } from 'react';

// const Office = () => {
//   const [office, setOffice] = useState("");
//   const [showOfficeForm, setShowOfficeForm] = useState(false);
//   const [showAssetForm, setShowAssetForm] = useState(false);

//   const handleOfficeFormToggle = () => {
//     setShowOfficeForm(!showOfficeForm);
//   };

//   const handleAssetFormToggle = () => {
//     setShowAssetForm(!showAssetForm);
//   };

//   return (
//     <div className="p-4">
//       <div className='flex gap-2 border-b pb-1 border-black mb-4'>
//         <button onClick={() => setOffice("office")} className='bg-green-400 px-2 py-1 rounded'>Office</button>
//         <button onClick={() => setOffice("assets")} className='bg-blue-400 px-2 py-1 rounded'>Assets</button>
//       </div>
//       {office === "office" ? (
//         <div>
//           <div className='flex items-center justify-between'>
//             <div className='border inline-block rounded border-black m-5'>
//               <input type="text" placeholder='search for offices' className='outline-none px-1' />
//               <button className='bg-green-400 px-1'>Search</button>
//             </div>
//             <div>
//               <button onClick={handleOfficeFormToggle} className='bg-blue-400 px-1 rounded'>Create Office +</button>
//             </div>
//           </div>
//           <div className='w-full h-[100vh] mt-1 flex flex-col'>
//             <div className='flex items-center w-[40vw] rounded justify-between px-5 h-auto py-3 shadow-lg'>
//               <div className=''>
//                 <h1 className='text-xl'>Office Name</h1>
//                 <p className="">Employees : </p>
//                 <p className="">Location : </p>
//                 <p className="">Budget Allotment : </p>
//                 <p className="">Budget Spending : </p>
//                 <p className="">Rating : </p>
//                 <p>More fields related to assets</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : office === "assets" ? (
//         <div>
//           <div className='flex items-center justify-between'>
//             <div className='border inline-block rounded border-black m-5'>
//               <input type="text" placeholder='search for assets' className='outline-none px-1' />
//               <button className='bg-green-400 px-1'>Search</button>
//             </div>
//             <div>
//               <button onClick={handleAssetFormToggle} className='bg-blue-400 px-1 rounded'>Create Asset +</button>
//             </div>
//           </div>
//           <div className='w-full h-[100vh] mt-1 flex flex-col'>
//             <div className='flex items-center w-[40vw] rounded justify-between px-5 h-auto py-3 shadow-lg'>
//               <div className=''>
//                 <h1 className='text-xl'>Asset Name</h1>
//                 <p>Office name : </p>
//                 <p className="">Employees : </p>
//                 <p className="">Location : </p>
//                 <p className="">Budget Allotment : </p>
//                 <p className="">Budget Spending : </p>
//                 <p className="">Rating : </p>
//                 <p className=''>Asset type : </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="p-4 bg-gray-200 rounded">Please select an option</div>
//       )}

//       {showOfficeForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold">Create Office</h2>
//               <button onClick={handleOfficeFormToggle} className="text-red-500">X</button>
//             </div>
//             <form>
//               <div className="space-y-4">
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Office Name</label>
//                   <input
//                     placeholder="Office Name"
//                     type="text"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="officeName"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Location</label>
//                   <input
//                     placeholder="Location"
//                     type="text"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="location"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Budget Allotment</label>
//                   <input
//                     placeholder="Budget Allotment"
//                     type="number"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="budgetAllotment"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Employees</label>
//                   <input
//                     placeholder="Employees"
//                     type="number"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="employees"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <button
//                     className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-500"
//                     type="submit"
//                   >
//                     Create Office
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {showAssetForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold">Create Asset</h2>
//               <button onClick={handleAssetFormToggle} className="text-red-500">X</button>
//             </div>  
//             <form>
//               <div className="space-y-4">
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Asset Name</label>
//                   <input
//                     placeholder="Asset Name"
//                     type="text"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="assetName"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Office Name</label>
//                   <input
//                     placeholder="Office Name"
//                     type="text"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="officeName"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Budget Allotment</label>
//                   <input
//                     placeholder="Budget Allotment"
//                     type="number"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="budgetAllotment"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Employees</label>
//                   <input
//                     placeholder="Employees"
//                     type="number"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="employees"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-base font-medium text-gray-900">Asset Type</label>
//                   <input
//                     placeholder="Asset Type"
//                     type="text"
//                     className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
//                     name="assetType"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <button
//                     className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-500"
//                     type="submit"
//                   >
//                     Create Asset
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Office;

"use client";
import React, { useState } from 'react';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';

const Office = () => {
  const [office, setOffice] = useState("");
  const [showOfficeForm, setShowOfficeForm] = useState(false);
  const [showAssetForm, setShowAssetForm] = useState(false);

  const handleOfficeFormToggle = () => setShowOfficeForm(!showOfficeForm);
  const handleAssetFormToggle = () => setShowAssetForm(!showAssetForm);

  const renderCard = (title, data) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
      {Object.entries(data).map(([key, value]) => (
        <p key={key} className="mb-2">
          <span className="font-semibold">{key}:</span> {value}
        </p>
      ))}
    </div>
  );

  const renderForm = (title, fields, onClose) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <FaTimes size={24} />
          </button>
        </div>
        <form className="p-6 space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Create {title}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button
              onClick={() => setOffice("office")}
              className={`px-4 py-2 rounded-md transition duration-300 ₹{
                office === "office" ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              Office
            </button>
            <button
              onClick={() => setOffice("assets")}
              className={`px-4 py-2 rounded-md transition duration-300 ₹{
                office === "assets" ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              Assets
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search for ₹{office || 'items'}...`}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={office === "office" ? handleOfficeFormToggle : handleAssetFormToggle}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center"
            >
              <FaPlus className="mr-2" /> Create {office || 'Item'}
            </button>
          </div>
        </div>

        {office === "office" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCard("Office Name", {
              Employees: "100",
              Location: "New York",
              "Budget Allotment": "₹1,000,000",
              "Budget Spending": "₹750,000",
              Rating: "4.5/5",
            })}
            {/* Add more office cards here */}
          </div>
        )}

        {office === "assets" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCard("Asset Name", {
              "Office name": "Headquarters",
              Employees: "50",
              Location: "San Francisco",
              "Budget Allotment": "₹500,000",
              "Budget Spending": "₹400,000",
              Rating: "4.2/5",
              "Asset type": "Equipment",
            })}
            {/* Add more asset cards here */}
          </div>
        )}

        {!office && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Welcome to Office Management</h2>
            <p className="text-gray-600">Please select an option above to get started.</p>
          </div>
        )}

        {showOfficeForm && renderForm("Office", [
          { label: "Office Name", name: "officeName", type: "text" },
          { label: "Location", name: "location", type: "text" },
          { label: "Budget Allotment", name: "budgetAllotment", type: "number" },
          { label: "Employees", name: "employees", type: "number" },
        ], handleOfficeFormToggle)}

        {showAssetForm && renderForm("Asset", [
          { label: "Asset Name", name: "assetName", type: "text" },
          { label: "Office Name", name: "officeName", type: "text" },
          { label: "Budget Allotment", name: "budgetAllotment", type: "number" },
          { label: "Employees", name: "employees", type: "number" },
          { label: "Asset Type", name: "assetType", type: "text" },
        ], handleAssetFormToggle)}
      </div>
    </div>
  );
};

export default Office;