import { Link } from "react-router-dom";

const Card = ({
  card: { id, title, description, address, phone, image },
}) => {

  return (
    <div className="card text-start h-100">
      <img src={image} className="card-img-top " alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <hr/>
        <p className="card-text m-0 p-0"><b>Phone: </b>{phone}</p>
        <p className="card-text p-0 m-0"><b>Address: </b>{address}</p>
        <p className="card-text p-0 m-0"><b>Card number: </b>{id}</p>

        <div className="d-flex mt-2 ">
        <Link to={`/my-cards/edit/${id}`} className="nav-link p-2">
        <i className="bi bi-pencil-fill"></i>
        </Link>
        <Link to={`/my-cards/delete/${id}`} className="nav-link p-2 ">
        <i className="bi bi-trash3-fill"></i>
        </Link>
        <Link to={`/my-cards/phone/${id}`} className="nav-link p-2 ms-auto">
        <i className="bi bi-telephone-fill"></i>
        </Link>
        <Link to={`/my-cards/favorite/${id}`} className="nav-link p-2">
        <i className="bi bi-heart-fill"></i>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
