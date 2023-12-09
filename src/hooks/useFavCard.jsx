import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";
import { useAuth } from "../contexts/auth.context";

export const useFavCards = () => {
  const [cards, setCards] = useState([]);
    const { user } = useAuth();
    
    useEffect(() => {
      
    const getFavCards = async () => {
        const checkLike = (card) => {
            if (user){
                const foundLike = Boolean(card.likes.find((like) => like === user._id));
                if (foundLike){
                    return card
                }
            }
        }
        const data = await cardsService.getAllCards();
        const liked = data.map((card) => {
               if(checkLike(card)){return card}
        })
        setCards(liked.filter((card)=> card !== undefined));
    };

    getFavCards();
   
  }, []);
  return cards;
};

