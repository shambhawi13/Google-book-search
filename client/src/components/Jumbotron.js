import React from "react";
const jumbotronStyle = {
  paddingBottom: "150px",
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  borderRadius: "30px"
  
};
const textStyle = {
    fontWeight: 900,
    fontSize: "30px",
    color: "white"
}

const title = {
  fontWeight: 900,
  color: "white"
}





function Jumbotron() {
  return (
    <div className="container">
      <br></br>
      <div
        className="card-panel  #f8bbd0 pink lighten-4
        "
        style={jumbotronStyle}
      >
        <div className="container center">
          <h1 style={title}>Google Books Search!</h1>
          <p style={textStyle}>Search and Save Books of Interest</p>
          <p style={textStyle}>Made with React.js</p>

        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
