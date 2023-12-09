import PageHeader from "./common/pageHeader";
import Card from "./card";
import { Link } from "react-router-dom";
import {useFavCards} from "../hooks/useFavCard"
import cardsService from "../services/cardsService";

const FavCards = () => {
  const cards = useFavCards()

  return (
    <>
    <PageHeader
      title={
        <>
          Favorite Cards Page
        </>
      }
      description="Here you can find all your'e favorite business cards"
      />
      <div className="row">
        {!cards.length ? (
          <p>no cards found...</p>
        ) : (
            cards.map((card) => <div className=" col-12 col-sm-6 col-lg-4 mx-auto mb-2 p-sm-1" key={card._id}><Card card={card} /></div> )
        )}
      </div>
      </>
  );
};

export default FavCards;
