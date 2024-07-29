// "use client"
// import Link from 'next/link';
// import React, { useState } from 'react';
// import Office from './Office';

// const Admin = ({ children }) => {
//     const [isOpen, setIsOpen] = useState("");

//     const handleOffice = ()=>{
//         setIsOpen("office");
//     }
//     const handleProfile = ()=>{
//         setIsOpen("profile");
//     }
//   return (
//     <>
//       <div className="w-full h-[100vh] flex">
//         {/* Categories */}
//         <div className="w-[15%] h-full bg-yellow-400 fl ex flex-col gap-10 justify-center items-center py-10">
//           <Link href="/"className="hover:underline">HOME
//           </Link>
//           <button onClick={handleOffice} className="hover:underline">OFFICES
//           </button>
//           <button onClick={handleProfile} className="hover:underline">PROFILES
//           </button>
//           <Link href="/chat" className="hover:underline">HELP         </Link>
//           <Link href="/logout" className="hover:underline">LOGOUT
//           </Link>
//         </div>
//         {/* Admin Area */}
//         <div className="w-[85%] h-full  p-10 overflow-y-auto">
//           {
//             isOpen === "office" ? (<Office/>) : isOpen === "profile" ? ( <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold">Demo User</h2>
//                 <p className="text-gray-600">demouser.gmail.com</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">User Type: admin</h3>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">Other Information:</h3>
//                 <p>I am participants of hack'ndore</p>
//               </div>
//             </div>) : ( <div>Welcome to Admin DashBoard</div>)
//           }
//         </div>
//       </div>
//     </>
//   );
// };

// export default Admin;

// "use client"
// import Link from 'next/link';
// import React, { useState } from 'react';
// import Office from './Office';
// import { useRouter } from 'next/navigation';

// const Admin = ({ children }) => {
//     const [isOpen, setIsOpen] = useState("");
//     const router = useRouter();

//     const handleOffice = () => {
//         setIsOpen("office");
//     }
//     const handleProfile = () => {
//         setIsOpen("profile");
//     }
//     const handleHome = () => {
//         setIsOpen("");
//         router.push('/');
//     }

//     return (
//         <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="w-full md:w-64 bg-blue-600 text-white">
//                 <div className="p-4">
//                     <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
//                 </div>
//                 <nav className="flex flex-col p-4">
//                     <button onClick={handleHome} className={`py-2 px-4 rounded transition duration-200 ${isOpen === "" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>HOME</button>
//                     <button onClick={handleOffice} className={`py-2 px-4 rounded mt-2 transition duration-200 ${isOpen === "office" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>OFFICES</button>
//                     <button onClick={handleProfile} className={`py-2 px-4 rounded mt-2 transition duration-200 ${isOpen === "profile" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>PROFILES</button>
//                     <Link href="/chat" className="py-2 px-4 rounded mt-2 transition duration-200 hover:bg-blue-700">HELP</Link>
//                     <Link href="/logout" className="py-2 px-4 rounded mt-2 transition duration-200 hover:bg-blue-700">LOGOUT</Link>
//                 </nav>
//             </div>

//             {/* Main Content */}    
//             <div className="flex-grow p-6 md:p-10 overflow-y-auto">
//                 {isOpen === "office" ? (
//                     <Office />
//                 ) : isOpen === "profile" ? (
//                     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//                         <div className="md:flex">
//                             <div className="p-8">
//                                 <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Profile</div>
//                                 <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Demo User</h2>
//                                 <p className="mt-2 text-gray-500">demouser.gmail.com</p>
//                                 <p className="mt-4"><span className="font-semibold">User Type:</span> admin</p>
//                                 <p className="mt-4"><span className="font-semibold">Other Information:</span></p>
//                                 <p className="mt-2 text-gray-600">I am a participant of hack'ndore</p>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Admin Dashboard</h2>
//                         <p className="text-xl text-gray-600">Select an option from the sidebar to get started.</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Admin;


// "use client"
// import React, { useState } from 'react';
// import Office from './Office';
// import { useRouter } from 'next/navigation';

// const Admin = () => {
//     const [isOpen, setIsOpen] = useState("");
//     const router = useRouter();

//     const handleNavigation = (page) => {
//         setIsOpen(page);
//         if (page === "home") {
//             router.push('/');
//         }
//     }

//     const handleHelp = () => {
//         router.push('/chat');
//     }

//     const handleLogout = () => {
//         // Implement logout logic here
//         router.push('/logout');
//     }

//     return (
//         <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="w-full md:w-64 bg-blue-600 text-white">
//                 <div className="p-4">
//                     <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
//                 </div>
//                 <nav className="flex flex-col p-4">
//                     <button onClick={() => handleNavigation("home")} className={`py-2 px-4 rounded transition duration-200 ${isOpen === "home" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>HOME</button>
//                     <button onClick={() => handleNavigation("office")} className={`py-2 px-4 rounded mt-2 transition duration-200 ${isOpen === "office" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>OFFICES</button>
//                     <button onClick={() => handleNavigation("profile")} className={`py-2 px-4 rounded mt-2 transition duration-200 ${isOpen === "profile" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>PROFILES</button>
//                     <button onClick={handleHelp} className="py-2 px-4 rounded mt-2 transition duration-200 hover:bg-blue-700">HELP</button>
//                     <button onClick={handleLogout} className="py-2 px-4 rounded mt-2 transition duration-200 hover:bg-blue-700">LOGOUT</button>
//                 </nav>
//             </div>

//             {/* Main Content */}    
//             <div className="flex-grow p-6 md:p-10 overflow-y-auto">
//                 {isOpen === "office" && <Office />}
//                 {isOpen === "profile" && (
//                     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//                         <div className="md:flex">
//                             <div className="p-8">
//                                 <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Profile</div>
//                                 <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Demo User</h2>
//                                 <p className="mt-2 text-gray-500">demouser.gmail.com</p>
//                                 <p className="mt-4"><span className="font-semibold">User Type:</span> admin</p>
//                                 <p className="mt-4"><span className="font-semibold">Other Information:</span></p>
//                                 <p className="mt-2 text-gray-600">I am a participant of hack'ndore</p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {isOpen === "home" && (
//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Admin Dashboard</h2>
//                         <p className="text-xl text-gray-600">Select an option from the sidebar to get started.</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Admin;







"use client"
import React, { useState, useEffect } from 'react';
import Office from './Office';
import { useRouter } from 'next/navigation';

const Admin = () => {
    const [activePage, setActivePage] = useState("home");
    const router = useRouter();

    useEffect(() => {
        // Set home as active when component mounts
        setActivePage("home");
    }, []);

    const handleNavigation = (page) => {
        setActivePage(page);
        if (page === "home") {
            router.push('/admin'); // Assuming '/admin' is the route for this Admin component
        }
    }

    const handleHelp = () => {
        router.push('/chat');
    }

    const handleLogout = () => {
        // Implement logout logic here
        router.push('/');
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-blue-600 text-white">
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
                </div>
                <nav className="flex flex-col p-4">
                    <button onClick={() => handleNavigation("home")} className={`py-2 px-4 rounded transition duration-200 ${activePage === "home" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>HOME</button>
                    <button onClick={() => handleNavigation("office")} className={`py-2 px-4 rounded mt-2 transition duration-200 ${activePage === "office" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>OFFICES</button>
                    <button onClick={() => handleNavigation("profile")} className={`py-2 px-4 rounded mt-2 transition duration-200 ${activePage === "profile" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>PROFILES</button>
                    <button onClick={handleHelp} className="py-2 px-4 rounded mt-2 transition duration-200 hover:bg-blue-700">HELP</button>
                    <button onClick={handleLogout} className="py-2 px-4 rounded mt-2 transition duration-200 hover:bg-blue-700">LOGOUT</button>
                </nav>
            </div>

            {/* Main Content */}    
            <div className="flex-grow p-6 md:p-10 overflow-y-auto">
                {activePage === "home" && (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Admin Dashboard</h2>
                        <p className="text-xl text-gray-600">Select an option from the sidebar to get started.</p>
                    </div>
                )}
                {activePage === "office" && <Office />}
                {activePage === "profile" && (
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Profile</div>
                                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Demo User</h2>
                                <p className="mt-2 text-gray-500">demouser.gmail.com</p>
                                <p className="mt-4"><span className="font-semibold">User Type:</span> admin</p>
                                <p className="mt-4"><span className="font-semibold">Other Information:</span></p>
                                <p className="mt-2 text-gray-600">I am a participant of hack'ndore</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;