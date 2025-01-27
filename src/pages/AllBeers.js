import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeers() {
    const [beersList, setBeersList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); 
  
    useEffect(() => {
      if (searchQuery === "") {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            setBeersList(response.data);
            setIsLoading(true);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
          .then((response) => {
            setBeersList(response.data);
            setIsLoading(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [searchQuery]);
  
    if (beersList.length === 0 && isLoading === false) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for beers"/>
        {beersList.length === 0 ? (
          <p>No beers found</p>
        ) : (
          <div>
            {beersList.map((beer) => (
              <div key={beer._id}>
                <img src={beer.image_url} alt="beer-img" />
                <Link to={`/beers/${beer._id}`}> <h1>{beer.name}</h1></Link>
                <h2>{beer.tagline}</h2>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default AllBeers;