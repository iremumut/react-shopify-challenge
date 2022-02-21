import './App.css';
import Header from './containers/Header';
import SearchForm from './components/SearchForm';
import {MovieProvider} from  "./context/MoviesContext";
import SearchResultList from './components/SearchResultList';
import {useState} from "react";
import NomineesList from './components/NomineesList';

function App() {

  const [searchResult, setSearchResult] = useState([]);

  //console.log(searchResult);
  return (
    <div className="App">
      <MovieProvider>
        <Header />
        <SearchForm setSearchResult={setSearchResult}/>
        <SearchResultList movies={searchResult} />
        <NomineesList />
      </MovieProvider>
    </div>
  );
}

export default App;
