import { useState } from "react";
import axios from 'axios';       
import { useNavigate } from "react-router-dom"; 

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributed, setContributed] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBeer = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributed,
        };
        console.log('newBeer', newBeer)
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(({ data }) => {
                console.log('response data', data)
                navigate("/beers");
            })
            .catch((error) => {
                console.error("Error adding new beer:", error);
              });
    }

    return(
        <div>
            <h4>Add a new beer</h4>
            <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>Tagline:</label>
            <input type="text" name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />

            <label>Description:</label>
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <label>First Brewed:</label>
            <input type="text" name="firstBrewed" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}/>

            <label>Brewers Tips:</label>
            <input type="text" name="brewersTips" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} />

            <label>Attenuation Level:</label>
            <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)}/>

            <label>Contributed by:</label>
            <input type="text" name="contributed" value={contributed} onChange={(e) => setContributed(e.target.value)}/>

            <button type="submit">ADD NEW</button>
            </form>
        </div>
    )
}

export default NewBeer;