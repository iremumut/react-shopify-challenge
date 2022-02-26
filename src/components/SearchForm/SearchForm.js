import {useState, useContext} from "react";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SearchForm.css";
import {MoviesContext} from "../../context/MoviesContext";

const axios = require("axios");

function SearchForm({setSearchResult}) {
    const [search, setSearch] = useState("");
    

    const [store, dispatch] = useContext(MoviesContext);
  
    const [toggle, setToggle] = useState(store.isMovie);

    

    function handleToggle(e){
        dispatch({
            type: "CHANGE_FILTER"
        })
        setToggle(prev => !prev)
        const type = store.isMovie? "series":"movie";
        fetchData(search,type);
    }

    function handleChange(e){
        //e.preventDefault();
        setSearch(e.target.value);
        const type = store.isMovie? "movie":"series";
        if(e.target.value){
            fetchData(e.target.value,type)
        }else {
            setSearchResult([]);
        }
        
        
    }

    function fetchData(name,type){
        axios.get(`http://www.omdbapi.com/?apikey=a42bfb66&type=${type}&s=${name}`)
        .then((response) => {
            // handle success
            //console.log(response);
            if(response.data.Response === "True"){
                //console.log(response.data.Search)
                setSearchResult([...response.data.Search]);
            }else{
                setSearchResult([]);
                console.log(response.data.Error);
            }
            
        })
        .catch((error) => {
            // handle error
            setSearchResult([]);
            console.log(error);
        })
    }

    return(
        <Form className="mb-3">
            <Row>
            <Col>
            <div className="switch-btn mb-3">
                <span className="switch-btn-option" id="movie-opt">Movie</span>
                <span className="switch-btn-option" id="show-opt">Tv Show</span>
                <input className="switch-btn-checkbox" type="checkbox" value={toggle} onChange={handleToggle}></input>
                <label className="switch-btn-label"></label>
            </div>
            </Col>
            </Row>
            

            <Form.Group className="input-group my-3 ">
            <button className="btn btn-outline-secondary searchIcon" disabled type="button" id="searchIcon"><span className="bi bi-search form-control-feedback"></span></button>
            <Form.Control className="form-control py-2 border-right-0 border" id="movie" name="movie" 
            type="text" placeholder="Search" value={search} onChange={handleChange}/>
            </Form.Group>
        </Form>
    )
}

export default SearchForm;