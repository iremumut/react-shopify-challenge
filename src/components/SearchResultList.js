import SearchResult from "../containers/SearchResult";

function SearchResultList({movies = []}){

    if(movies.length === 0){
        return (<div>No result yet.</div>)
    }
    const moviesList = movies.map((movie) => {
        return (<SearchResult key={movie.imdbID} movie={movie}></SearchResult>)
    }) 
    return (
        <ul>
            {moviesList}
        </ul>
    )
}

export default SearchResultList;