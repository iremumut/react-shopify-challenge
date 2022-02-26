import { useContext } from "react";
import {MoviesContext} from "../../context/MoviesContext";
import "./Nominee.css";

function Nominee({nominee:{Title, Year, Poster = "https://via.placeholder.com/80x120.png", imdbID, Type}}) {

    const [store, dispatch] = useContext(MoviesContext);


    const handleDelete = () => {
        let found;
        if(Type === "movie"){
            //console.log(store.movies);
            found = store.movies.filter((movie) => {
                return movie.imdbID === imdbID;
            });
            if(found.length >0 ){
                dispatch({
                    type: "REMOVE_MOVIE",
                    payload: {
                        imdbID: imdbID
                    }
                })
            }
        }else{
            found = store.shows.filter((show) => {
                return show.imdbID === imdbID;
        })
            if(found.length >0 ){
                dispatch({
                    type: "REMOVE_SHOW",
                    payload: {
                        imdbID: imdbID
                    }
                })
            }
        }    
    }

    return (
        <div>
        <li className="nominee my-3">
            <img className="nominee-img" src={Poster} alt={Title}></img>
            
            <div className="nominee-info">
            <h3>{Title}</h3>
            <p>{Year}</p>
            </div>
            
            <button  className="nominee-btn" onClick={handleDelete}>x</button>
        </li>
        </div>
    )
}

export default Nominee;