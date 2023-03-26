import hasMovies from '../mockups/hasMovies.json';
import { MovieCard } from "./MovieCard";

export const ListMovies = () => {
	return (
		<>
			{
				hasMovies.Search?.length > 0 
				?
					hasMovies.Search.map( (movie) => (
						<MovieCard key={movie.imdbID} movie={movie} />
					))
				: 
					<p>No se encontraron resultados para tu busqueda.</p>
			}
		</>
	)
}
