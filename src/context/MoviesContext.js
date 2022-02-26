import { createContext, useReducer } from "react";

const inital_state = {
    movies: [],
    shows: [],
    isMovie: true
}
export const MoviesContext = createContext(inital_state);

const movieReducer = (state,action) => {
    //console.log(state);
    switch(action.type){
        case "ADD_MOVIE":
            return ({...state, movies:[...state.movies,action.payload.movie]});
        case "REMOVE_MOVIE":
            return ({...state, movies:[...state.movies.filter((movie) => {
                return movie.imdbID !== action.payload.imdbID;
            })]})
        case "ADD_SHOW":
            return ({...state, shows:[...state.shows,action.payload.show]});
        case "REMOVE_SHOW":
            return  ({...state, shows:[...state.shows.filter((show) => {
                return show.imdbID !== action.payload.imdbID;
            })]})
        case "CHANGE_FILTER":
            return ({...state, isMovie: !state.isMovie})
        default:
            return state;
    }

}

export const MovieProvider = ({children}) => {

    const [store, dispatch] = useReducer(movieReducer, inital_state)

    return (
        <MoviesContext.Provider value={[store,dispatch]}>
            {children}
        </MoviesContext.Provider>
    )
}

