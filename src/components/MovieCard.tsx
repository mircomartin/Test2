import { Movie } from "../interfaces/interface"

interface Props {
	movie: Movie;
}

export const MovieCard = ( { movie }: Props ) => {
	return (
		<div>
			<img src={movie.Poster} alt={movie.Title} />
			<h3>{movie.Title}</h3>
			<p>{movie.Year}</p>
		</div>
	)
}
