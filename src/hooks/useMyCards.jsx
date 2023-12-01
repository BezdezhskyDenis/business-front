import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";

export const useMyCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getMyCards = async () => {
      const data = await cardsService.getMyCards();
      setCards(data);
      
    };

     getMyCards();
   
  }, []);
  return cards;
};

