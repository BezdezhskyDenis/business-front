import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useCard } from "../hooks/useCardById";
import { Link } from "react-router-dom";
import { useUserData } from "../hooks/useUserData";

const BusinessCardPage = () => {
  const {address, bizNumber, description, email, image, likes, phone, subtitle, title, user_id, web, _id}= useCard()

  return (
    <>
    <div className="row my-4">
    <div className="col-sm-6">
    <div className="text-start m-2">
            <img src={image?.url} className="card-img" alt={image?.alt} />
    </div>
    </div>
    <div className="col-sm-6">
        <div className="text-start m-2">
            <div className="">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center pt-2">{subtitle}</p>
                <hr/>
                <p className="card-text"><b>About: </b>{description}</p>
                <p className="card-text m-0 p-0"><b>Phone: </b>{phone}</p>
                <p className="card-text m-0 p-0"><b>Email: </b>{email}</p>
                <p className="card-text p-0 m-0"><b>Address: </b>{address?.street} {address?.houseNumber}, {address?.city}</p>
                <p className="card-text p-0 m-0"><b>Country: </b>{address?.country}</p>
                {web && <p className="card-text p-0 m-0"><b>web: </b>{web}</p>}
                <p className="card-text p-0 m-0"><b>Card number: </b>{bizNumber}</p>
                <p className="card-text p-0 m-0"><b>Likes: </b>{likes?.length}</p>
            </div>
        </div>
    </div>
    </div>
    
    </>
  );
};

export default BusinessCardPage;
