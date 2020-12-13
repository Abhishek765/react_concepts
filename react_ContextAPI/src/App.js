import "./App.css";
import AddMovies from "./components/AddMovies";
import MovieList from "./components/MovieList";
import { MoviesProvider } from "./components/MoviesContext";
import Nav from "./components/Nav";

function App() {
  return (
    <MoviesProvider>
      <div className="App">
        <Nav />
        <AddMovies/>
        <MovieList />   
      </div>
    </MoviesProvider>
  );
}

export default App;
