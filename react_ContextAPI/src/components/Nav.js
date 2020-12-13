import React, { useContext } from 'react'
import "./Nav.css"
import {MoviesContext} from './MoviesContext'

const Nav = () => {

    const [movies, setMovies] = useContext(MoviesContext);
    return (
        <div className="nav">
             <h1>Abhishek Movies</h1>      
             <p>Movies Count: {movies.length}</p>        
        </div>
    )
}

export default Nav;
