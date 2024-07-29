// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8 mt-auto">
//       <div className="container flex flex-col justify-center item-center mx-auto px-4">
//         <div className="flex flex-col lg:flex-row justify-center items-center mb-6">
//           <div className="flex space-x-6">
//             <a href="#" className="hover:underline">Website Policies</a>
//             <a href="#" className="hover:underline">Help</a>
//             <a href="#" className="hover:underline">Contact Us</a>
//             <a href="#" className="hover:underline">Feedback</a>
//           </div>
//         </div>
//         <div className="text-center flex justify-center flex-col items-center lg:text-left mb-6">
//           <p>Content Owned by District Administration</p>
//           <p>© District Indore, Developed And Hosted By National Informatics Centre, Ministry Of Electronics & Information Technology, Government Of India</p>
//           <p>Last Updated: <span className="font-bold">Jul 24, 2024</span></p>
//         </div>
//         <div className="flex flex-col lg:flex-row justify-between items-center">
//           <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
//             <img src="/Assets/swaas.png" alt="Swaas Logo" className="h-10 mx-2" />
//             <img src="/Assets/nic.png" alt="NIC Logo" className="h-10 mx-2" />
//             <img src="/Assets/digi.png" alt="Digital India Logo" className="h-10 mx-2" />
//           </div>
//           <div className="flex justify-center lg:justify-end">
//             <img src="/Assets/caw.png" alt="CAW Logo" className="h-10" />
//             <div className="text-blue-400 ml-2">Certified Accessible Website</div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container flex flex-col justify-center items-center mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-6">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Website Policies</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Feedback</a>
          </div>
        </div>
        <div className="text-center flex justify-center flex-col items-center lg:text-left mb-6">
          <p>Content Owned by District Administration</p>
          <p>© District Indore, Developed And Hosted By National Informatics Centre, Ministry Of Electronics & Information Technology, Government Of India</p>
          <p>Last Updated: <span className="font-bold">Jul 24, 2024</span></p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
            <img src="/Assets/swaas.png" alt="Swaas Logo" className="h-10 mx-2" />
            <img src="/Assets/nic.png" alt="NIC Logo" className="h-10 mx-2" />
            <img src="/Assets/digi.png" alt="Digital India Logo" className="h-10 mx-2" />
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <img src="/Assets/caw.png" alt="CAW Logo" className="h-10" />
            <div className="text-blue-400 ml-2">Certified Accessible Website</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


