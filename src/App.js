import './App.css';
import Header from './containers/Header';
import SearchForm from './components/SearchForm';
import {MovieProvider} from  "./context/MoviesContext";
import SearchResultList from './components/SearchResultList';
import {useState} from "react";
import NomineesList from './components/NomineesList';

import { Container, Row, Col} from "react-bootstrap";

function App() {

  const [searchResult, setSearchResult] = useState([]);

  //console.log(searchResult);
  return (
    <div className='App'>
        <MovieProvider>
        <Header />
          <Container> 
            <Row>
              <Col>
                <SearchForm setSearchResult={setSearchResult}/>
                <SearchResultList movies={searchResult} />
              </Col>
              <Col>
                <NomineesList /> 
              </Col>
            </Row>
          </Container>
      </MovieProvider>
    </div>
  );
}

export default App;
