// 'use client';
// import { useState } from 'react';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const Card = ({ heading, content, onButtonClick, isSelected, index }) => {
//   return (
//     <div className="w-full sm:w-1/2 md:w-1/3 p-4 flex flex-col">
//       <div className={`bg-white shadow-xl rounded-lg p-6 flex flex-col ${isSelected ? 'border-2 border-gray-200' : ''}`}>
//         <h2 className="text-black text-2xl font-bold mb-4">{heading}</h2>
//         <p className="text-gray-700 mb-4 flex-grow">{content}</p>
//         <button 
//           onClick={() => onButtonClick(index)}
//           className="text-black border border-black rounded-full px-4 py-1 flex items-center justify-between w-32 hover:bg-gray-200 transition-colors"
//         >
//           Button
//           <span className="ml-2"><KeyboardArrowDownIcon /></span>
//         </button>
//         {isSelected && (
//           <div className="mt-4">
//             <h3 className="text-xl font-bold mb-2">Additional Information</h3>
//             <p>This is the accordion content for card {index + 1}. You can customize this content based on which card was selected.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Cards = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const cardData = [
//     {
//       heading: "Track the vehicle",
//       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
//     },
//     {
//       heading: "Ask the assistant",
//       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
//     },
//     {
//       heading: "Equipment Status",
//       content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
//     },
//   ];

//   const handleCardClick = (index) => {
//     setSelectedCard(selectedCard === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-wrap mx-4">
//         {cardData.map((card, index) => (
//           <Card 
//             key={index}
//             index={index}
//             heading={card.heading} 
//             content={card.content} 
//             onButtonClick={handleCardClick}
//             isSelected={selectedCard === index}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;


'use client';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Card = ({ heading, content, onButtonClick, isSelected, index }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className={`bg-white mx-2 shadow-xl rounded-lg p-6 flex flex-col ${isSelected ? 'border-2 border-gray-200' : ''}`}>
        <h2 className="text-black text-2xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-700 mb-4 flex-grow">{content}</p>
        <button 
          onClick={() => onButtonClick(index)}
          className="text-black border border-black rounded-full px-4 py-1 flex items-center justify-between w-32 hover:bg-gray-200 transition-colors"
        >
          Button
          <span className="ml-2"><KeyboardArrowDownIcon /></span>
        </button>
        {isSelected && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Additional Information</h3>
            <p>This is the accordion content for card {index + 1}. You can customize this content based on which card was selected.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      heading: "Track kyo karu vehicle",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
    },
    {
      heading: "Ask the assistant",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
    },
    {
      heading: "Equipment Status",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <div className="container flex gap-[10px]  mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4 ">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            index={index}
            heading={card.heading} 
            content={card.content} 
            onButtonClick={handleCardClick}
            isSelected={selectedCard === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
