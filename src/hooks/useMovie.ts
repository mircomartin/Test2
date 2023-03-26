import { useState } from "react";
import { Movie } from "../interfaces/interface";

const ENDPOINT_MOVIE = 'https://www.omdbapi.com/?apikey=e2933a1b&s='

export const useMovie = () => {

  const [movies, setMovies] = useState<Movie[] | []>([]);

  const getMovies = async ( query: string ) => {

    try {

      const response = await fetch(`${ENDPOINT_MOVIE}${query}`);
      const { Search } = await response.json();
      setMovies(Search)
      
    } catch (error) {

      console.log(error)
      
    }

  }

  return {
    getMovies,
    movies
  }
}
