import {useContext} from "react";
import { MoviesContext } from "../context/MoviesContext";

function SearchResult({movie: {Title, Year, Poster, imdbID}}){

    const [store,dispatch] = useContext(MoviesContext);
    
    function handleNominate(){
        dispatch({
            type: "ADD_MOVIE",
            payload:{
                movie: {Title: Title, Year: Year, Poster: Poster, imdbID: imdbID }
            } 
        })
    }
    
    return(
        <li className="movie-result">
            <h3>{Title}</h3>
            <p>{Year}</p>
            <img src={Poster} alt={Title}></img>
            <button onClick={handleNominate}>Nominate</button>
        </li>
    )
}

export default SearchResult;