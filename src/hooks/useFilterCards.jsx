// import React, { useEffect, useState } from 'react';
// import { useAllCards } from './useAllCards';
// import cardsService from '../services/cardsService';

// export const useCardsFilter = (cards) =>{
//     const [searchTerm, setSearchTerm] = useState("sub");
//     const [filteredCards, setFilteredCards] = useState();
//     // console.log(filteredCards)
//     // useEffect(() => {
//     //     const getAllCards = async () => {
//     //       const data = await cardsService.getAllCards();
//     //       setFilteredCards(data);
//     //     };
//     //      getAllCards();
//     //   }, []);

//     const handleSearch = (event) => {
//       const newSearchTerm = event.target.value.toLowerCase();
//       setSearchTerm(newSearchTerm);
//       filterCard()
//     };
//         const filterCard = async () =>{
//             const data = await cards
//             console.log(data)
//             const filterCards = data.filter(
//                 (card) =>
//                 card.title.toLowerCase().includes(searchTerm) ||
//                 card.subtitle.toLowerCase().includes(searchTerm) ||
//                 card.description.toLowerCase().includes(searchTerm)
//                 );
//                 // console.log(filterCards)
//                 setFilteredCards(filterCards);
//             }
//            if (cards !== undefined){
//         }
//         filterCard()
//   return {handleSearch, filteredCards, searchTerm}
//     }

// import React, { useEffect, useState } from 'react';
// import cardsService from '../services/cardsService';

// export const useCardsFilter = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredCards, setFilteredCards] = useState([]);

//   const handleSearch = (event) => {
//     const newSearchTerm = event.target.value.toLowerCase();
//     setSearchTerm(newSearchTerm);
//   };

//   const filterCard = async (data) => {
//     const filterCards = data.filter(
//       (card) =>
//         card.title.toLowerCase().includes(searchTerm) ||
//         card.subtitle.toLowerCase().includes(searchTerm) ||
//         card.description.toLowerCase().includes(searchTerm)
//     );
//     setFilteredCards(filterCards);
//   };

//   useEffect(() => {
//     const getAllCards = async () => {
//       try {
//         const data = await cardsService.getAllCards();
//         filterCard(data);
//       } catch (error) {
//         console.error('Error fetching cards:', error);
//       }
//     };

//     getAllCards();
//   }, [searchTerm]);

//   return { handleSearch, filteredCards, searchTerm };
// };
import React, { useEffect, useState } from 'react';

export const useCardsFilter = (cards) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCard, setFilteredCards] = useState([]);

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
  };

  const filterCard = async (data) => {
    const filterCards = data.filter(
      (card) =>
        card.title.toLowerCase().includes(searchTerm) ||
        card.subtitle.toLowerCase().includes(searchTerm) ||
        card.description.toLowerCase().includes(searchTerm)
    );
    setFilteredCards(filterCards);
  };

  useEffect(() => {
    filterCard(cards);
  }, [searchTerm, cards]);

  return { handleSearch, filteredCard, searchTerm };
};
