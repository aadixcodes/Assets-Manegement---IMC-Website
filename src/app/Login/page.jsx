// // "use client";
// // import React, { useState } from 'react';

// // const page = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Implement login logic here
// //     console.log("Logging in with:", { email, password });
// //   };

// //   return (
// //     <form>
// //       <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
// //         <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
// //           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
// //             <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
// //               Create an account


// //               </p><div>
// //                 <label class="block mb-2 text-sm font-medium text-gray-900">
// //                   Your username
// //                 </label>
// //                 <input placeholder="JohnDoe" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text"/>
// //               </div>
// //               <div>
// //                 <label class="block mb-2 text-sm font-medium text-gray-900">
// //                   Password
// //                 </label>
// //                 <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password"/>
// //               </div>
// //               <div>
// //                 <label class="block mb-2 text-sm font-medium text-gray-900">
// //                   Confirm password
// //                 </label>
// //                 <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password"/>
// //               </div>
// //               <div class="flex items-start">
// //                 <div class="flex items-center h-5">
// //                   <input class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms"/>
// //                 </div>
// //                 <div class="ml-3 text-sm">
// //                   <label class="font-light text-gray-500 text-gray-300">
// //                     I accept the
// //                     <a href="#" class="font-medium text-primary-600 hover:underline text-primary-500">
// //                       Terms and Conditions
// //                     </a>
// //                   </label>
// //                 </div>
// //               </div>

// //               <button class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
// //                 Create an account
// //               </button>

// //           </div>
// //         </div>
// //       </div></form>
// //   );
// // };

// // export default page;

// "use client";
// import React, { useState } from 'react';

// const Page = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//     acceptTerms: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement account creation logic here
//     console.log("Creating account with:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Create an account
//         </h2> */}
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form>
//             <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
//               <div class="w-full rounded-lg  border md:mt-0 sm:max-w-md xl:p-0">
//                 <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//                   <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
//                     Signin to your account


//                   </p><div>
//                     <label class="block mb-2 text-sm font-medium text-gray-900">
//                       Your username
//                     </label>
//                     <input placeholder="JohnDoe" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text"/>
//                   </div>
//                   <div>
//                     <label class="block mb-2 text-sm font-medium text-gray-900">
//                       Password
//                     </label>
//                     <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password"/>
//                   </div>
//                   <div>
//                     <label class="block mb-2 text-sm font-medium text-gray-900">
//                       Confirm password
//                     </label>
//                     <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password"/>
//                   </div>
//                   <div class="flex items-start">
//                     <div class="flex items-center h-5">
//                       <input class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms"/>
//                     </div>
//                     <div class="ml-3 text-sm">
//                       <label class="font-light text-gray-500 text-gray-300">
//                         I accept the
//                         <a href="#" class="font-medium text-primary-600 hover:underline text-primary-500">
//                           Terms and Conditions
//                         </a>
//                       </label>
//                     </div>
//                   </div>

//                   <button class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
//                     Create an account
//                   </button>

//                 </div>
//               </div>
//             </div>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;


"use client";
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement account creation logic here
    console.log("Creating account with:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Signin to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-[16px] font-medium mb-2 text-gray-700">
                Your email or username
              </label>
              <input
                id="username"
                name="enter email or username"
                type="text"
                placeholder="JohnDoe"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
              />

            </div>
            <div>
              <label htmlFor="password" className="block text-[16px] mb-2 font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-full shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-transform duration-200 "
              >
                Login
              </button>

            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/Signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

