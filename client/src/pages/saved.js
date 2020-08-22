import React, { useEffect } from "react";
import { useBookContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import { GET_ALL_BOOKS, DELETE_BOOK } from "../utils/actions";

const title = {
    fontWeight: 900,
  }

function Saved() {
  const [state, dispatch] = useBookContext();
  useEffect(() => {
    // Get all the books from our Mongo DB

    API.getBooks().then((response) => {
      console.log("Back from DB: " + JSON.stringify(response.data));

      dispatch({ type: GET_ALL_BOOKS, savedBooks: response.data });
    });
  }, []);

  function removeBook(id) {
    API.deleteBook(id)
      .then(dispatch({ type: DELETE_BOOK, id }))
      .catch((err) => console.log(err));
  }

  return (
    <div>
        <br></br>
        <br></br>
    <div
      className="container"
      style={{ backgroundColor: "#ffffff", padding: "10px", borderRadius: "30px" }}
    >
    
      {state.savedBooks ? (
        state.savedBooks.map((book) => {
          return (
            <div className="collection-item" key={book._id}>
               
              <h4 style={title}>{book.title}  <button
                className="btn  #f8bbd0 pink lighten-4"
                onClick={() => removeBook(book._id)}
              >
                Remove Book
              </button></h4> 
              
              
           
              {book.image != "" && book.image != undefined ? (
                <img src={book.image} />
              ) : (
                <p>No image stored.</p>
              )}
              <h5>Description:</h5>
              <p>{book.description}</p>
               
              
                
              
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
</div>
  );
}

export default Saved;
