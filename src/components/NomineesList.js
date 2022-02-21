import { useContext } from "react";
import Nominee from "../containers/Nominee";
import { MoviesContext } from "../context/MoviesContext";
function NomineesList() {

    const [store] = useContext(MoviesContext);

    if(store.length === 0){
        return <div><h2>No Nominations Yet.</h2> </div>
    }

    const nominations = store.map((movie) => {
        return (<Nominee key={movie.imdbID} movie={movie}></Nominee>)
    })
    return (
        <div>
            <h2>Nominations: </h2>
            <ul>
                {nominations}
            </ul>
        </div>
    )
}


export default NomineesList;