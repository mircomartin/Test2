import { useCallback, useMemo, useRef, useState } from "react";
import { Movie } from "../interfaces/interface";
import { searchMovies } from "../services/movies";


export const useMovie = ( { query, sort }: { query: string, sort: boolean } ) => {

  const [movies, setMovies] = useState<Movie[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const previousSearch = useRef(query);

  const getMovies = useCallback( async ( { query }: { query: string } ) => {

    if( query === previousSearch.current ) return;

    try {
      setLoading(true)    
      previousSearch.current = query;  
      const movies = await searchMovies( { query } )
      setMovies(movies)

    } catch ( error: any ) {
      setError( error.message )
    } finally {
      setLoading(false)      
    }

  }, [])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies]?.sort((a, b) => a.Title.localeCompare(b.Title)) : movies
  }, [sort, movies])

  return {
    getMovies,
    movies: sortedMovies,
    loading,
    error
  }
}
