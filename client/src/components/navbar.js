import React from "react";
import { Link, useLocation } from "react-router-dom";

const Styles = {
  nav: {
    fontWeight: 900,
    fontSize: "30px",
    
  },
  logo: {
    marginLeft: "10px"
  }
};
function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="nav-wrapper #f8bbd0 pink lighten-4">
        
        <Link to="/" className="left" id="logo" style={Styles.nav}>
         <li className="brand-logo" style={Styles.logo}> Books </li>
        </Link>
        
        <ul className="right">
          {/* to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} */}
          <li>
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
             Search
          </Link>
          </li>
            <li>
          <Link
            to="/saved"
            className={
              location.pathname === "/saved" ? "nav-link active" : "nav-link"
            }
          >
            Saved
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
