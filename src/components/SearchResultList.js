import SearchResult from "./SearchResult/SearchResult";
import uuid from 'react-uuid';

function SearchResultList({result = []}){

    if(result.length === 0){
        return (<div>No results yet.</div>)
    }
    const resultList = result.map((res) => {
        return (<SearchResult key={uuid()} result={res}></SearchResult>)
    }) 
    return (
        <ul className="">
            {resultList}
        </ul>
    )
}

export default SearchResultList;