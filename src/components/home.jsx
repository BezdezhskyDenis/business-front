import PageHeader from "./common/pageHeader";
import Card from "./card";
import {useMyCards} from "../hooks/useMyCards"
const Home = () => {
  const cards = useMyCards()
console.log(cards)
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
          cards.map((card) => <div className="col-sm-6 col-lg-4 mx-auto mb-3"><Card card={card} key={card.id}/></div> )
        )}
      </div>
      </>
  );
};

export default Home;
