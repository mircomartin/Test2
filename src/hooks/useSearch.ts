import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {

	const [query, setQuery] = useState<string>('')
	const [error, setError] = useState<string | null >(null)

	const isFirstInput = useRef<boolean>(true)

	useEffect(() => {

		if( isFirstInput.current ) {
			isFirstInput.current = query === '';
			return
		}
		if( query.trim().length <= 2 ) {
			setError('La busqueda debe tener al menos 3 caracteres');
			return;
		}
		if( query.match(/^\d+$/) ) {
			setError('No se puede buscar una pelicula con un numero')
			return;
		}

		setError( null )

	}, [query])
	


	return {
		query,
		setQuery,
		error
	}
}
