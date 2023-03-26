import { Movie } from '../interfaces/interface';
import { MovieCard } from "./MovieCard";

interface Props {
	movies: Movie[];
}

export const ListMovies = ( { movies }: Props ) => {
	return (
		<>
			{
				movies.length > 0 
				?
					movies.map((movie) => (
						<MovieCard key={movie.imdbID} movie={movie} />
					))
				: 
					<p>No se encontraron resultados para tu busqueda.</p>
			}
		</>
	)
}
