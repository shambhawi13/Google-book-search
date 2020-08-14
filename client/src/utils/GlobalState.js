import React, { createContext, useReducer, useContext } from "react";
import {
    GET_ALL_BOOKS,
    SAVE_BOOKS,
    DELETE_BOOKS
  } from "./actions";

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
    switch (action.type) {
    case GET_ALL_BOOKS:
      return state;
  
    case SAVE_BOOKS:
      return [...state,action.book]
  
    case DELETE_BOOKS:
      return state.filter((book)=>{
          return book._id = action.id
      });
  
    default:
      return state;
    }
  };

  const BookProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, []);
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useBookContext = () => {
    return useContext(BookContext);
  };
  
  export { BookProvider, useBookContext };
  