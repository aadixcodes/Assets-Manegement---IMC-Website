"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';
import { PiChatCircleDotsFill } from "react-icons/pi";
import Chat from '@/shared/Chat';
import OverviewAndServices from '@/components/overview';
import Municipalities from '@/components/Municipalities';

const page = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <>
    {/* <Link href="/chat" className='fixed z-[999] bottom-10 right-4 bg-blue-600 p-2 rounded-full'>
      <PiChatCircleDotsFill size={30} color='white'/>
</Link> */}
{isChatOpen && (
        <div className="fixed z-[1000] bottom-20 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <Chat />
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <PiChatCircleDotsFill size={24} />
      </button>
      
      {/* Page 1 */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover select-none">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Page 2 */}
      <div className='w-full min-h-auto'>
        <Cards /> 
      </div>

      <OverviewAndServices />
      <Municipalities />

      </>
  )
}

export default page;

// "use client";
// import React, { useState } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Cards from '@/components/Cards';
// import { PiChatCircleDotsFill } from "react-icons/pi";
// import Chat from '@/shared/Chat';

// const Page = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   return (
//     <>
//       <div className="relative">
//         <button 
//           onClick={toggleChat} 
//           className='fixed z-[999] bottom-10 right-4 bg-blue-600 p-2 rounded-full'
//         >
//           <PiChatCircleDotsFill size={30} color='white'/>
//         </button>
        
//         {isChatOpen && (
//           <div className="fixed bottom-24 right-4 z-[1000] w-[350px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
//             <Chat onClose={toggleChat} />
//           </div>
//         )}
//       </div>
      
//       {/* Page 1 */}
//       <div className="relative w-full h-[70vh] overflow-hidden mt-0">
//         <video autoPlay loop muted className="w-full h-full object-cover select-none">
//           <source src="/hero.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Page 2 */}
//       <div className='w-full min-h-auto'>
//         <Cards /> 
//       </div>
//     </>
//   );
// };

// export default Page;

// "use client";
// import React, { useState } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Cards from '@/components/Cards';
// import { PiChatCircleDotsFill } from "react-icons/pi";
// import Chat from '@/shared/Chat';

// const Page = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [message, setMessage] = useState('');

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     // Implement your logic to send the message
//     console.log('Sending message:', message);
//     setMessage('');
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen flex flex-col">
//         <main className="flex-grow">
//           <Cards />
//         </main>
//         <Footer />
//       </div>
      
//       {isChatOpen && (
//         <div className="fixed bottom-20 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg">
//           <Chat />
//           <div className="absolute bottom-0 left-0 right-0 p-4">
//             <input
//               type="text"
//               value={message}
//               onChange={handleMessageChange}
//               placeholder="Type your message..."
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={handleSendMessage}
//               className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
      
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         <PiChatCircleDotsFill size={24} />
//       </button>
//     </>
//   );
// };

// export default Page;



// "use client";
// import React, { useState } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Cards from '@/components/Cards';
// import { PiChatCircleDotsFill } from "react-icons/pi";
// import Chat from '@/shared/Chat';

// const Page = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen flex flex-col">
//         <main className="flex-grow">
//           <Cards />
//         </main>
//         <Footer />
//       </div>
      
//       {isChatOpen && (
//         <div className="fixed bottom-20 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
//           <Chat />
//         </div>
//       )}
      
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         <PiChatCircleDotsFill size={24} />
//       </button>
//     </>
//   );
// };

// export default Page;
