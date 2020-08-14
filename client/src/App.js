import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Jumbotron from "./components/Jumbotron";
import { BookProvider } from "./utils/GlobalState";
import { Home } from './pages/home';
import { Save } from './pages/save';
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Router>
        <div>
          <BookProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/save" component={Save} />
              <Route component={NoMatch} />
            </Switch>
          </BookProvider>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}


export default App;
