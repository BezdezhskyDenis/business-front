import { Link } from "react-router-dom";

const Card = ({
  card: { address:{country, city, street, houseNumber},image:{alt, url},bizNumber, description, email, image, likes, phone, subtitle, title, user_id, web, _id},
}) => {
  return (
    <div className="card text-start h-100">
      <img src={url} className="card-img-top " alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <hr/>
        <p className="card-text m-0 p-0"><b>Phone: </b>{phone}</p>
        <p className="card-text p-0 m-0"><b>Address: </b>{street} {houseNumber}, {city}</p>
        <p className="card-text p-0 m-0"><b>Card number: </b>{bizNumber}</p>

        <div className="d-flex mt-2 ">
        <Link to={`/my-cards/edit/${_id}`} className="nav-link p-2">
        <i className="bi bi-pencil-fill"></i>
        </Link>
        <Link to={`/my-cards/delete/${_id}`} className="nav-link p-2 ">
        <i className="bi bi-trash3-fill"></i>
        </Link>
        <Link to={`/my-cards/phone/${_id}`} className="nav-link p-2 ms-auto">
        <i className="bi bi-telephone-fill"></i>
        </Link>
        <Link to={`/my-cards/favorite/${_id}`} className="nav-link p-2">
        <i className="bi bi-heart-fill"></i>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
