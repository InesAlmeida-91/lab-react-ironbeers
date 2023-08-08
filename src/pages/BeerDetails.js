import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetails() {
    const [singleBeer, setSingleBeer] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {
                console.log(response.data)
                setSingleBeer(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    if (!singleBeer) {
        return <p>Loading...</p>;
      }

    return(
        <div>
            <img src={singleBeer.image_url} alt={singleBeer.name}/>
            <h1>{singleBeer.name}</h1>
            <p>{singleBeer.tagline}</p>
            <p>First Brewed: {singleBeer.first_brewed}</p>
            <p>Attenuation Level: {singleBeer.attenuation_level}</p>
            <p>{singleBeer.description}</p>
            <p>Contributed by:{singleBeer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails;