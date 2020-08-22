import React from "react";
import { useBookContext } from "../utils/GlobalState";
import { STATES } from "mongoose";
import { SAVE_BOOK } from "../utils/actions";
import API from "../utils/API";

const Styles = {
  search: {
    borderRadius: "90px",
  },
  text:{ 
      fontWeight: 900
    },
    collection: {
      borderStyle: "none",
      marginBottom: "20px"
    }

};
function ResultsList() {
  const [state, dispatch]= useBookContext();


  function saveBook(volumeInfo) {

      dispatch({ type: SAVE_BOOK, book: volumeInfo });


      API.saveBook( volumeInfo );



  }
  



  console.log("Our current state object: " + JSON.stringify(state));

  return (
    <div className="container">
    
      <h4 className="white-text" style={Styles.text}>Results:</h4>
        <ul className="collection with-header">
            
              

{

        state.searchResults ? 
state.searchResults.map( (book,index) => 

 <li key={book.id}>
   <div className="collection-item" style={Styles.collection}>
   <h5 style={Styles.text}>
   { book.volumeInfo.title }</h5>
   <p>{
     
     book.volumeInfo.imageLinks ?
     <img src={book.volumeInfo.imageLinks.thumbnail} />
     : "noimage"
     
     }</p>
  
   <p>
   { book.volumeInfo.description }</p>

   


      <button className="btn #f8bbd0 pink lighten-4" onClick={()=>saveBook(book.volumeInfo)} > Save </button>

  </div>
  
 </li>
 

)
: <br></br>
        
}
          
          
        </ul>
      
    </div>
  );
}
export default ResultsList;

