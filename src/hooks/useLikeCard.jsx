import { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth.context";


export const UseLikeCheck = (likes) =>{
    const { user } = useAuth();
    const [cardLike, setCardLike] = useState("")
    
    useEffect(() => {
        const checkLike = async () => {
            const foundLike = Boolean(likes.find((like) => like === user._id));
            setCardLike(foundLike);
        };
        checkLike(); 
      }, []);
    
return {cardLike, setCardLike}
}
