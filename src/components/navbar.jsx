import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../contexts/auth.context";
import { useMode } from '../contexts/mode.context';

const NavBar = () => {
  // eslint-disable-next-line no-undef
  // const { user } = useAuth();
  const { mode, icon, handleModeChange } = useMode()
  const user = [{biz: "t"}]


  return (
    <nav className="navbar navbar-expand-sm shadow-sm" data-bs-theme={mode}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          BCard <i className="bi bi-postcard-heart-fill"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                ABOUT
              </NavLink>
            </li>
            {user[0]?.biz && (
              <li className="nav-item">
                <NavLink to="/my-cards" className="nav-link">
                  MY CARDS
                </NavLink>
              </li>
              )}
              {user ? (
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                FAV CARDS
              </NavLink>
            </li>
            ):(<></>)}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {user ? (
              <li className="nav-item">
                <NavLink to="/sign-out" className="nav-link">
                  SIGN OUT
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/sign-in" className="nav-link">
                    LOGIN
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sign-up" className="nav-link">
                    SIGN UP
                  </NavLink>
                </li>
              </>
                )}
                <li className="nav-item">
                <button type="button" className="btn " onClick={() =>{handleModeChange()}}>{icon}</button>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
