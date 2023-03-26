import { ListMovies } from "./components/ListMovies";
import { useMovie } from "./hooks/useMovie";
import { useSearch } from "./hooks/useSearch";

function App() {

  const { query, setQuery, error } = useSearch();
  const { getMovies, movies } = useMovie();

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setQuery( e.target.value );
  }

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    getMovies(query)
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
          error && <p style={{ color: 'red', border: '1px solid red', padding: '5px 10px', borderRadius: 6 }}>{error}</p>
        }
      </header>

      <main>
        <ListMovies movies={ movies } />
      </main>

    </div>
  )
}

export default App
