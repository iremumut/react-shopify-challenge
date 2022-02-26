import {useContext} from "react";
import { MoviesContext } from "../../context/MoviesContext";
import {Badge, Button} from  "react-bootstrap";
import "./SearchResult.css";

function SearchResult({result: {Title, Year, Poster, imdbID,Type}}){

    const [store,dispatch] = useContext(MoviesContext);

    //const [isInStore, setIsInStore] = useState(false); 

    //console.log("mounted");
    let isInStore = false;
    
    const found = () => {
        if(Type ===  "movie"){
            //console.log("from result list")
            //console.log(store.movies);
            const res = store.movies.filter((movie) => {
                return movie.imdbID === imdbID;
            })
            return res;
        }else{
            const res = store.shows.filter((show) => {
                return show.imdbID === imdbID;
            })
            return res;
        }
    } 
    //console.log(Title);
    //console.log(found().length);
    if(found().length >0){
        isInStore = true;
    }


    function handleNominate(){
        
        let storeFull = false;
        if(Type === "movie" && store.movies.length>=5){
            storeFull = true;
        }else if(store.shows.length >=5){
            storeFull = true;
        }
        //console.log(storeFull);
        if(!isInStore && !storeFull){
            if(Type === "movie"){
                dispatch({
                    type: "ADD_MOVIE",
                    payload:{
                        movie: {Title: Title, Year: Year, Poster: Poster, imdbID: imdbID, Type:Type }
                    } 
                })
            }else {
                dispatch({
                    type: "ADD_SHOW",
                    payload:{
                        show: {Title: Title, Year: Year, Poster: Poster, imdbID: imdbID, Type:Type }
                    } 
                })
            }
            
        }
        
    }
    
    return(
        <li className="movie-result">
            <h5 className="movie-result-title">{Title} <Badge pill bg="light" text="dark">{Year}</Badge>{' '}</h5>
            {/*<p>{Year}</p>*/}
            {/*<img src={Poster} alt={Title}></img>*/}
            {/*console.log(isInStore)*/}
            <Button onClick={handleNominate} disabled={isInStore} variant="light" className="movie-result-button">Nominate</Button>
        </li>

        
    )
}

export default SearchResult;
