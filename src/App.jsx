import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import ErrorFetch from './components/ErrorFetch';

function App() {
  const [location, setLocation] = useState();
  const [locationInput, setLocationInput] = useState();
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    let URL;

    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`;
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1;
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`;
    }

    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [locationInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationInput(e.target.inputSearch.value);
  };

  return (
    <div className="App">
      <div className="bg">
        <img className='bg-title' src="https://i.redd.it/o6cwlzg3exk41.png" alt="bg" />
        <form onSubmit={handleSubmit} className="form-container">
          <input
            id="inputSearch"
            type="text"
            className="search"
            placeholder="Enter a number from 1 to 126"
          />
          <button className="search-button">Search</button>
        </form>
        {hasError ? (
          <ErrorFetch />
        ) : (
          <>
            <LocationInfo location={location} />
            <div className="residents-container">
              {location?.residents.map((url) => (
                <ResidentCard key={url} url={url} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
