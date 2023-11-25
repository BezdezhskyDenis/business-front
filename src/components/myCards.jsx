import PageHeader from "./common/pageHeader";
import Card from "./card";
import { Link } from "react-router-dom";
import {useMyCards} from "../hooks/useMyCards"
const MyCards = () => {
  const cards = useMyCards()
  return (
    <>
    <PageHeader
      title={
        <>
          My CARDS
        </>
      }
      description="Here you can view your'e business cards"
      />
      <div className="row">
        {!cards.length ? (
          <p>no cards...</p>
        ) : (
          cards.map((card) => <div className=" col-12 col-sm-6 col-lg-4 mx-auto mb-2 p-sm-1" key={card._id}><Card card={card} /></div> )
        )}
        <div className=" col-12 col-sm-6 col-lg-4 mx-auto mb-2 p-sm-1" key={"new"}>
        <div className="card text-start h-100 text-center">
        <Link to={`/card-manager`} className="nav-link p-2">
        <i className="bi bi-file-plus-fill"></i>
        </Link>
        </div>
          </div>
      </div>
      </>
  );
};

export default MyCards;
