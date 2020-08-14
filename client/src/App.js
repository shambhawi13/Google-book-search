import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import SearchBar from "./components/searchbar"
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SearchBar />
      <Footer />  
    </div>
  );
}


export default App;
