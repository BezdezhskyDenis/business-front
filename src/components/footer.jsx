import { Link, NavLink } from "react-router-dom";
<<<<<<< HEAD
import { useAuth } from "../contexts/auth.context";




const Footer = () => {

  const { user } = useAuth();

=======
const Footer = () => {
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
  return (
    <div className="border-top py-2 container-fluid">
      <div className="d-flex justify-content-evenly">
        <Link to="/" className="nav-link">
          <i className="bi bi-info-circle-fill"></i><br/>about
        </Link>
<<<<<<< HEAD
        {user?.isBusiness && (
        <Link to="/" className="nav-link">
          <i className="bi bi-person-vcard-fill"></i><br/>my cards
        </Link>
        )}
        {user ? (
        <Link to="/" className="nav-link">
        <i className="bi bi-heart-fill"></i><br/>favorites
        </Link>
        ):(<></>)}
=======
        <Link to="/" className="nav-link">
          <i className="bi bi-person-vcard-fill"></i><br/>my cards
        </Link>
        <Link to="/" className="nav-link">
        <i className="bi bi-heart-fill"></i><br/>favorites
        </Link>
>>>>>>> 481e32ff7ceb6f59cd88fa3e29ea3b00c1b9ba47
      </div>
        <div className="mt-3">
        <span>
          BCard By Denis Bezdezhsky &copy; {new Date().getFullYear()}
        </span>
        </div>
    </div>
  );
};

export default Footer;
