import { useCallback, useState } from "react";
import { ListMovies } from "./components/ListMovies";
import { useMovie } from "./hooks/useMovie";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {

  const [sort, setSort] = useState(false);
  const { query, setQuery, error } = useSearch();
  const { getMovies, movies, loading, error: errorMovie } = useMovie( {query, sort} );

  const debouncedGetMovies = useCallback( 
    debounce( (query: string) => {
      getMovies({ query })
    }, 500)
    ,[]
  )

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const newSearch = e.target.value;
    setQuery( newSearch );
    debouncedGetMovies( newSearch );
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    getMovies({query})
  }
  
  return (
    <div className="page">

      <header>
        <h1>App de Peliculas</h1>

        <form onSubmit={ handleSubmit }>
          <input name="query" value={ query } onChange={ handleChange } type="text" placeholder="Avengers, Batman, Notebook..."/>
          <input type="checkbox" onChange={ handleSort } checked={ sort }/>
          <button type="submit">Search</button>
        </form>

        {
          error && <p style={{ color: 'red', border: '1px solid red', padding: '5px 10px', borderRadius: 6 }}>{error}</p>
        }
      </header>

      <main>
        {
          loading 
          ? <p>Loading...</p>
          : errorMovie
            ? <p>{ errorMovie }</p>
            : <ListMovies movies={ movies } />
        }
      </main>

    </div>
  )
}

export default App
