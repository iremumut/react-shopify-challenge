import SearchResult from "./SearchResult";

function SearchResultList({movies = []}){

    if(movies.length === 0){
        return (<div>No result yet.</div>)
    }
    const moviesList = movies.map((movie) => {
        return (<SearchResult key={movie.imdbID} movie={movie}></SearchResult>)
    }) 
    return (
        <ul className="">
            {moviesList}
        </ul>
    )
}

export default SearchResultList;