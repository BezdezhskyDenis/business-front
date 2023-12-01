import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";

export const useAllCards = () => {
  const [cards, setCards] = useState([

  ]);

  useEffect(() => {
    const getAllCards = async () => {
      const data = await cardsService.getAllCards();
      setCards(data);
      
    };

     getAllCards();
   
  }, []);
  return cards;
};

