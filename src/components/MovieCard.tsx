import { Movie } from "../interfaces/interface"

interface Props {
	movie: Movie;
}

export const MovieCard = ( { movie }: Props ) => {
	return (
		<div>
			<img src={movie.Poster} alt={movie.Title} />
			<h2>{movie.Title}</h2>
			<p>{movie.Year}</p>
		</div>
	)
}
