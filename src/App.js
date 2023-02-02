//App.js 
import useDataFetch from "./CustomHook/useDataFetch";

const urlBase = 'https://catfact.ninja/facts';
const queryParams = '?limit=';
const queryString = '5';
const fullUrl = (urlBase+queryParams+queryString)

function App() {
  const { data, loading, error } = useDataFetch(fullUrl);
  
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div className="App">
      {data && data.data.map(catFact => (
        <p key={catFact._id} {...catFact}>{catFact.fact}</p>
        ))}
    </div>
  );
}
export default App;