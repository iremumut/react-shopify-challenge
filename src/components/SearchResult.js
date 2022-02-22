import {useContext} from "react";
import { MoviesContext } from "../context/MoviesContext";
import {Card, Button} from  "react-bootstrap";

function SearchResult({movie: {Title, Year, Poster, imdbID}}){

    const [store,dispatch] = useContext(MoviesContext);

    let isInStore = false;
    const found = store.filter((movie) => {
        return movie.imdbID === imdbID;
    })

    if(found.length >0){
        isInStore = true;
    }


    function handleNominate(){
        //console.log(found);
        if(!isInStore){
            dispatch({
                type: "ADD_MOVIE",
                payload:{
                    movie: {Title: Title, Year: Year, Poster: Poster, imdbID: imdbID }
                } 
            })
        }
        
    }
    
    return(
        <li className="movie-result ">
            <h3 className="movie-result-title">{Title}</h3>
            <p>{Year}</p>
            {/*<img src={Poster} alt={Title}></img>*/}
            <button onClick={handleNominate} disabled={isInStore}>Nominate</button>
        </li>

        
    )
}

export default SearchResult;