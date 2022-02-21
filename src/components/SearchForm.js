import {useState} from "react";

const axios = require("axios");

function SearchForm() {
    const [search, setSearch] = useState("");

    const [searchResult, setSearchResult] = useState([]);



    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.get(`http://www.omdbapi.com/?apikey=a42bfb66&s=${search}`)
        .then((response) => {
            // handle success
            //console.log(response.data.Search);
            setSearchResult([...response.data.Search]);
          })
          .catch((error) => {
            // handle error
            console.log(error);
          })
        
    }

    console.log(searchResult);
    return(
        <form onSubmit={handleSubmit}>
            <input name="movie" value={search} onChange={handleSearch}></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;