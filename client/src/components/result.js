import React from "react";
import { useBookContext } from "../utils/GlobalState";
import { STATES } from "mongoose";



function ResultsList() {
  return (
    <div className="container">
      <ul>
        <ul class="collection with-header">
            
          <li class="collection-header">
            <h4>Results</h4>
          </li>
         
            <li class="collection-item"></li>
          
        </ul>
      </ul>
    </div>
  );
}
export default ResultsList;
