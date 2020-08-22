import React from "react";
const Styles = {
  footer: {
    marginTop: "400px",
  },
};

function Footer() {
  return (
    <footer className="page-footer#f8bbd0 pink lighten-4" style={Styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">React Reading List</h5>
            <p className="grey-text text-lighten-4">
              A simple reading list using Google's books API.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Github links to the creators</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="https://github.com/shambhawi13">
                  Shambhawi
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="https://github.com/b0rgbart3">
                  Bart
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="https://github.com/Kionling">
                  Daniel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 The Migos
        </div>
      </div>
    </footer>
  );
}

export default Footer;
