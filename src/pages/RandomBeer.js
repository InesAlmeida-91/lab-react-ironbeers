import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        console.log(response.data);
        setRandomBeer(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!randomBeer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <h1>{randomBeer.name}</h1>
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;