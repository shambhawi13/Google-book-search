import React from "react"
import {useBookContext}  from "../utils/GlobalState";
import SearchBar from "../components/searchbar";
import ResultsList from "../components/result";
import Jumbotron from "../components/Jumbotron";


function Home(){
    const [state, dispatch] = useBookContext();
    return(
        <div className="container">
          <Jumbotron />
          <SearchBar/>
          <ResultsList />
      {/* <ul>
        <ul class="collection with-header">
            
          <li class="collection-header">
            <h4>Results</h4>
          </li>

            <li class="collection-item"></li>
          
        </ul>
      </ul> */}
    </div>
    )
}
export default Home