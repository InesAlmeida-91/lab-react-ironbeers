import { Link } from "react-router-dom";
import beersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';

function HomePage() {
    return(
        <div>
            <img src={beersImg} alt="beersImg"/>
            <Link to={"/beers"}>All Beers</Link>
            <img src={randomBeerImg} alt="randomBeerImg"/>
            <Link to={"/random-beer"}>Random Beer</Link>
            <img src={newBeerImg} alt="newBeerImg"/>
            <Link to={"/new-beer"}>New Beer</Link>
        </div>
    )
}

export default HomePage;