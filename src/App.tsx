import { useState } from 'react';
import { ListMovies } from "./components/ListMovies";
import { useSearch } from "./hooks/useSearch";
import { Movie } from "./interfaces/interface";

function App() {

  const [movies, setMovies] = useState<Movie[] | []>([]);
  const { query, setQuery, error } = useSearch()

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setQuery( e.target.value );
  }

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    console.log(query)
  }

  return (
    <div className="page">

      <header>
        <h1>App de Peliculas</h1>

        <form onSubmit={ handleSubmit }>
          <input name="query" value={ query } onChange={ handleChange } type="text" placeholder="Avengers, Batman, Notebook..."/>
          <button type="submit">Search</button>
        </form>
        {
          error && <p>{error}</p>
        }

      </header>

      <main>
        <ListMovies />
      </main>

    </div>
  )
}

export default App
