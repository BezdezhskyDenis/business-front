import { createContext, useContext, useEffect, useState } from 'react';
import cardsService from '../services/cardsService';
import { useParams } from 'react-router-dom';

const CardsFilterContext = createContext();

export const useCardsFilterContext = () => {
    return useContext(CardsFilterContext);
};

export const CardsFilterProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const filterCard = (data) => {
    const filterCards = data.filter(
      (card) =>
        card.title.toLowerCase().includes(searchTerm) ||
        card.subtitle.toLowerCase().includes(searchTerm) ||
        card.description.toLowerCase().includes(searchTerm)
    );
    setFilteredCards(filterCards);
  };

  const fetchCards = async () => {
    try {
      // Fetch your cards data here
      const data = await cardsService.getAllCards();
      filterCard(data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  // Use useEffect to fetch cards when the component mounts
  useEffect(() => {
    fetchCards();
  }, [searchTerm]);

  return (
    <CardsFilterContext.Provider value={{ handleSearch, filteredCards, searchTerm, filterCard, fetchCards }}>
      {children}
    </CardsFilterContext.Provider>
  );
};
