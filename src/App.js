//App.js 
import useDataFetch from "./CustomHook/useDataFetch";

const urlBase = 'https://api.genderize.io/';
const queryParams = '?name=';
const queryString = 'Trygve';

function App() {
  const { data, loading, error } = useDataFetch(urlBase, queryParams, queryString);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="App">
      {data && <p>Data fetched successfully.</p>}
    </div>
  );
}
export default App;