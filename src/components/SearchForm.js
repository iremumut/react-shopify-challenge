import {useState} from "react";

const axios = require("axios");

function SearchForm({setSearchResult}) {
    const [search, setSearch] = useState("");


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

    return(
        <form onSubmit={handleSubmit}>
            <input name="movie" value={search} onChange={handleSearch}></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;