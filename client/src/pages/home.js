import React from "react";
import { useBookContext } from "../utils/GlobalState";
import SearchBar from "../components/searchbar";
import ResultsList from "../components/result";
import Jumbotron from "../components/Jumbotron";

function Home() {
  const [state, dispatch] = useBookContext();
  return (
    <div className="">
      <div className="row">
        <div className="col s12 l5">
          <Jumbotron />
        </div>
        <div className="col l7">
          <SearchBar />
        </div>
      </div>

      <ResultsList />
      {/* <ul>
        <ul className="collection with-header">
            
          <li className="collection-header">
            <h4>Results</h4>
          </li>

            <li className="collection-item"></li>
          
        </ul>
      </ul> */}
    </div>
  );
}
export default Home;
