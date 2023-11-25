import PageHeader from "./common/pageHeader";
import Card from "./card";
import {useAllCards} from "../hooks/useAllCards"
const Home = () => {
  const cards = useAllCards()
  return (
    <>
    <PageHeader
      title={
        <>
          CARDS PAGE
        </>
      }
      description="Here you can find business cards from all categories"
      />
      <div className="row">
        {!cards.length ? (
          <p>no cards...</p>
        ) : (
          cards.map((card) => <div className=" col-12 col-sm-6 col-lg-4 mx-auto mb-2 p-sm-1" key={card._id}><Card card={card} /></div> )
        )}
      </div>
      </>
  );
};

export default Home;
