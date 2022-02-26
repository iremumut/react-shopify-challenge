import './App.css';
import Header from './containers/Header';
import SearchForm from './components/SearchForm/SearchForm';
import {MovieProvider} from  "./context/MoviesContext";
import SearchResultList from './components/SearchResultList';
import {useState} from "react";
import NomineesList from './components/NomineesList';

import { Container, Row, Col} from "react-bootstrap";

function App() {

  const [searchResult, setSearchResult] = useState([]);

  //console.log(searchResult);
  //console.log(searchResult);
  return (

        <MovieProvider>
        <Header />
          <Container className='my-5'> 
            <Row>
              <Col xs={12} md={5}>
                <SearchForm setSearchResult={setSearchResult}/>
                <SearchResultList result={searchResult} />
              </Col>
              <Col></Col>
              <Col xs={12} md={5}>
                <NomineesList /> 
              </Col>
            </Row>
          </Container>
      </MovieProvider>

  );
}

export default App;
