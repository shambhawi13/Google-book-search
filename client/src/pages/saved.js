import React from "react";
import { useBooksContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";
import { DELETE_BOOKS } from "../utils/actions";


const Styles = {
    // nav: {
    //     fontWeight: 900,
    //     fontSize: "26px"
    // }

    removeBook: {

    }
}
function Saved() {
    const [state, dispatch] = useBooksContext();
    return (
        <div>
            {state.map(book => {
                return (<div>
                    <p>{book.title}</p>
                    <p>{book.description}</p>
                    <div style={}
                        onClick={() => {
                            dispatch({
                                type: actions.DELETE_BOOKS,
                                id: book.id
                            })
                        }}>
                        Remove Book
                    </div>
                </div>)
            })
            }
       
        </div>
    );

}

export default Saved;