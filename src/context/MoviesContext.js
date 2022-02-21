import { createContext, useReducer } from "react";

export const MoviesContext = createContext([]);

const movieReducer = (state,action) => {
    switch(action.tpye){
        case "ADD_MOVIE":
            return ([...state,action.payload.movie]);
        default:
            return state;
    }

}

export const MovieProvider = ({children}) => {

    return (
        <MoviesContext.Provider value={"hello"}>
            {children}
        </MoviesContext.Provider>
    )
}

