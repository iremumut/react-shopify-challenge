import { createContext, useReducer } from "react";

export const MoviesContext = createContext([]);

const movieReducer = (state,action) => {
    switch(action.type){
        case "ADD_MOVIE":
            return ([...state,action.payload.movie]);
        case "REMOVE_MOVIE":
            return (state.filter((movie) => {
                return movie.imdbID !== action.payload.imdbID;
            }))
        default:
            return state;
    }

}

export const MovieProvider = ({children}) => {
    const [store, dispatch] = useReducer(movieReducer, [])

    return (
        <MoviesContext.Provider value={[store,dispatch]}>
            {children}
        </MoviesContext.Provider>
    )
}

