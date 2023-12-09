import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "../services/cardsService";
import { useAlert } from "../contexts/alert.context";

const CardDelete = () => {
  const { id, bizNumber } = useParams();
  const navigate = useNavigate();
  const {handleAlertChange} = useAlert()
  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(id, bizNumber).catch(() => {});
      navigate("/my-cards");
    };
    handleAlertChange("Card was deleted", "warning");
    deleteCard();
  }, [id, navigate]);

  return null;
// return (<></>)
};

export default CardDelete;