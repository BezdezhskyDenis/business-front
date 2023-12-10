import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";
import { useParams } from "react-router-dom";

export const useCard = () => {
  const [card, setCard] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getCardById = async () => {
      const data = await cardsService.getCard(id);
      setCard(data);
      
    };

    getCardById();
   
  }, [id]);

  return card;
};

