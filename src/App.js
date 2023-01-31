import React, { useState, useEffect } from 'react';
import "./styles.css";

const App = () => {
  return (
    <div>
      <Fetch1 />
    </div>

  );
};

export default App;

const Fetch1 = () => {

  // Declare state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data when the component is mounted
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Render data or loading/error message
  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>An error occurred: {error.message}</div>
      ) : data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}
