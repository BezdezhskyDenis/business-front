import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";

export const useAllCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllCards = async () => {
      try {
        const data = await cardsService.getAllCards();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      } finally {
        setLoading(false);
      }
    };

     getAllCards();
   
  }, []);
  return cards;
};

