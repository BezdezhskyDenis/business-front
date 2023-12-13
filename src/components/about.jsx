import PageHeader from "./common/pageHeader";
import Card from "./card";
import {useAllCards} from "../hooks/useAllCards"

const About = ({headTitle}) => {
  return (
    <>
    <PageHeader
      title={headTitle}/>
      <div className="text-start mb-4">
        <p>Welcome to BCard!
Our platform is designed to empower our community to effortlessly create and share their digital visit cards.
With three distinct plans as explained at the bottom, you will have the flexibility to choose what aligns best with your needs.
Join us today and become a valued member of our thriving community!</p>
      </div>
      <div className=" mb-4">
        <h3 className="">Account types</h3>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
      <div className="col-md-4">
    <div className="card h-100">
      <div className="card-header mb-2">
        <h5 className="card-title">No account</h5>
      </div>
      <img src="https://img.freepik.com/free-photo/3d-morph-man-looking-through-binoculars_1048-13676.jpg?size=626&ext=jpg&ga=GA1.1.268149419.1702323511&semt=ais" className="card-img-top p-1 rounded-4" alt="No account"/>
      <div className="card-body">
        <ul>
        <li className="card-text">Access all the cards</li>
        <li className="card-text">Contact support</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card h-100">
      <div className="card-header mb-2">
        <h5 className="card-title">Standard</h5>
      </div>
      <img src="https://img.freepik.com/free-vector/men-with-search-bar-website-information_24877-53532.jpg?size=626&ext=jpg&ga=GA1.1.268149419.1702323511&semt=ais" className="card-img-top p-1 rounded-4" alt="Standard"/>
      <div className="card-body">
        <ul>
        <li className="card-text">Access all the cards</li>
        <li className="card-text">Keep Favorites</li>
        <li className="card-text">Contact support</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card h-100">
      <div className="card-header mb-2">
        <h5 className="card-title">Business</h5>
      </div>
      <img src="https://img.freepik.com/premium-vector/businessman-handshaking-contract-with-signature_53562-9351.jpg?size=626&ext=jpg" className="card-img-top p-1 rounded-4" alt="Business"/>
      <div className="card-body">
        <ul>
        <li className="card-text">Access all the cards</li>
        <li className="card-text">Keep Favorites</li>
        <li className="card-text">Create and Manage your own card</li>
        <li className="card-text">Contact support</li>
        </ul>
      </div>
    </div>
  </div>
</div>
      </>
  );
};

export default About;
