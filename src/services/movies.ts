const ENDPOINT_MOVIE = 'https://www.omdbapi.com/?apikey=e2933a1b&s='

export const searchMovies = async ( { query }: { query: string } ) => {

	try {

		if ( query ) {
			const response = await fetch(`${ENDPOINT_MOVIE}${query}`);
			const { Search } = await response.json();
			return Search
		}

	} catch (error) {
		throw new Error("Error searching movies.");
	}
	
}