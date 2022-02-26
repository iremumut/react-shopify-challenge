import { useContext} from "react";
import Nominee from "./Nominee/Nominee";
import Congrats from "../containers/Congrats";
import { MoviesContext } from "../context/MoviesContext";
function NomineesList() {

    const [store] = useContext(MoviesContext);

    
    if(store.movies.length === 0 && store.shows.length === 0){
        return <div><h2>No Nominations Yet</h2> </div>
    }

    let type = store.isMovie;
    

    const nominations = () =>{
        if(type){
            const res = store.movies.map((movie) => {
                return (<Nominee key={movie.imdbID} nominee={movie}></Nominee>)
            })
            return res;
        }else {
            const res = store.shows.map((show) => {
                return (<Nominee key={show.imdbID} nominee={show}></Nominee>)
            })
            return res;
        }
    }
    
    
    return (
        <div>
            {type? store.movies.length===5? <Congrats type={type}/>: "" : store.shows.length===5? <Congrats type={type}/> : ""}

            <h2 className="mb-3 text-center fs-2">{type? "Movie" : "Tv Show"} Nominations</h2>
            <ul>
                {nominations()}
            </ul>
        </div>
    )
}


export default NomineesList;