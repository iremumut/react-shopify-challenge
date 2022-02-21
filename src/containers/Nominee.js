import { useContext } from "react";
import {MoviesContext} from "../context/MoviesContext";

function Nominee({movie:{Title, Year, Poster, imdbID}}) {

    const [store, dispatch] = useContext(MoviesContext);


    const handleDelete = () => {
        const found =  store.filter((movie) => {
            return movie.imdbID === imdbID;
        });
        if(found.length > 0){
            dispatch({
                type: "REMOVE_MOVIE",
                payload: {
                    imdbID: imdbID
                }
            })
        }
        
    }

    return (
        <div>
        <li className="">
            <h3>{Title}</h3>
            <p>{Year}</p>
            <img src={Poster} alt={Title}></img>
            <button onClick={handleDelete} >Delete</button>
        </li>
        </div>
    )
}

export default Nominee;