import React from "react";
const Styles = {
    nav: {
        fontWeight: 900,
        fontSize: "26px"
    }
}
function Navbar() {
  return (
    <nav>
  <div class="nav-wrapper #1976d2 blue darken-2">
    <a linkto="/" class="left" style={Styles.nav}>Books</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="" >Search</a></li>
      <li><a href="" >Saved</a></li>

    </ul>
  </div>
</nav>
  );
}

export default Navbar;
