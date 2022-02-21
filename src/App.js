import './App.css';
import Header from './containers/Header';
import SearchForm from './components/SearchForm';
import {MovieProvider} from  "./context/MoviesContext";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Header />
        <SearchForm />
      </MovieProvider>
    </div>
  );
}

export default App;
