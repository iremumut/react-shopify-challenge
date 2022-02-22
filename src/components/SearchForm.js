import {useState} from "react";
import { Form, Button, Col } from "react-bootstrap";

const axios = require("axios");

function SearchForm({setSearchResult}) {
    const [search, setSearch] = useState("");


    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        //setSearch(e.target.value);
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
        <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Group className="row align-items-center">
            <Col md={10}>
            <Form.Control cl name="movie" type="text" placeholder="Search"value={search} onChange={handleSearch}/>
            </Col>
            <Col md={2}>
            <Button type="submit">Search</Button>
            </Col>
            </Form.Group>

        </Form>
    )
}

export default SearchForm;