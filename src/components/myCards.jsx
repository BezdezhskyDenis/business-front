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
          MY CARDS
        </>
      }
      description="Here you can view your'e business cards"
      />
      <div className="row">
        {!cards.length ? (
          <p>no cards found...</p>
        ) : (
          cards.map((card) => <div className=" col-12 col-sm-6 col-lg-4 mx-auto mb-2 p-sm-1" key={card._id}><Card card={card} /></div> )
        )}
        <div className=" col-12 col-sm-6 col-lg-4 mx-auto mb-2 p-sm-1" key={"new"}>
        <div className="card text-start h-100 position-relative">
        <Link to={`/new-card`} className=" h-100">
          <span className="p-2 position-absolute top-50 start-50 translate-middle">
        <i className="bi bi-file-plus-fill fs-1 text-success"></i>

          </span>
        </Link>
        </div>
          </div>
      </div>
      </>
  );
};

export default MyCards;
