import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="border-top py-2 container-fluid">
      <div className="d-flex justify-content-evenly">
        <Link to="/" className="nav-link">
          <i className="bi bi-info-circle-fill"></i><br/>about
        </Link>
        <Link to="/" className="nav-link">
          <i className="bi bi-person-vcard-fill"></i><br/>my cards
        </Link>
        <Link to="/" className="nav-link">
        <i className="bi bi-heart-fill"></i><br/>favorites
        </Link>
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
