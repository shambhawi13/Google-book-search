import React from "react";

const Styles = {
  search: {
    borderRadius: "90px",
  },
  text:{ 
      fontWeight: 900
    }

};

function SearchBar() {
  return (
    <div className="container">
      <div className="card #1565c0 blue darken-3">

          <h3 className="">Search for a book</h3>
        <nav className="white z-depth-2" style={Styles.search}>
          <div
            class="nav-wrapper #1976d2 blue darken-2 z-depth-0"
            style={Styles.search}
          >
            <form>
              <div class="input-field z-depth-0" style={Styles.search}>
                <input id="search" type="search" style={Styles.search}></input>
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SearchBar;
