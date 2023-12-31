import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import cardsService from "../services/cardsService"
import { useCallback } from "react";
import { UseLikeCheck } from "../hooks/useLikeCard";

const Card = ({
  card: { address:{country, city, street, houseNumber},image:{alt, url},bizNumber, description, likes, phone, subtitle, title, user_id, web, _id},
}) => {
  const { user } = useAuth();
  const logInUserCard = (user_id) =>{
    if(user && (user._id === user_id || user.isAdmin)){
      return true
    }
  }
    let {cardLike, setCardLike} = UseLikeCheck(likes, user)
  
    const {likeCard} = cardsService

  const likeCardChange = useCallback(async (id) => {
    await likeCard(id);
  }, []);
  
const handleLikeCard = (id) =>{
  likeCardChange(id)
  setCardLike(!cardLike)
}

  return (
    <div className="card text-start h-100 position-relative">
      <div className="mb-5" style={{transform: "rotate(0)"}}>
      <img src={url} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subtitle}</p>
        <hr/>
        <p className="card-text m-0 p-0"><b>Phone: </b>{phone}</p>
        <p className="card-text p-0 m-0"><b>Address: </b>{street} {houseNumber}, {city}</p>
        <p className="card-text p-0 m-0"><b>Card number: </b>{bizNumber}</p>
      <Link to={`/card/${_id}`} className="stretched-link"></Link>
      </div>
      </div>
        <div className="d-flex m-2 position-absolute bottom-0">
          {logInUserCard(user_id)?(
            <>
              <Link to={`/my-cards/edit/${_id}`} className="nav-link p-2">
              <i className="bi bi-pencil-fill"></i>
              </Link>
              <Link to={`/my-cards/delete/${_id}/${bizNumber}`} className="nav-link p-2 ">
              <i className="bi bi-trash3-fill"></i>
              </Link>
            </>
          ):(<></>)}
          <Link to={`/card/${_id}`} className="nav-link p-2 ms-auto">
          <i className="bi bi-telephone-fill"></i>
          </Link>
          {user?(
            <button className={`nav-link p-2 ${cardLike && "text-danger"}`} onClick={() =>{handleLikeCard(_id)}}>
            <i className="bi bi-heart-fill"></i>
            </button>
          ):(<></>)}
        </div>
    </div>
  );
};

export default Card;
