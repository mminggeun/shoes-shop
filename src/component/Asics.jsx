import '../styles/Asics.css';
import {shoes} from '../data/Shoesdata';
import { Link } from 'react-router-dom';
import asicspage from '../assets/logos/asicspage.png';

function Asics() {

    const filterasics = shoes.filter((shoe) => shoe.image.includes("asics"))

    return (
        <>
            <div className="asics-container1">
                <img src = {asicspage} className="asicscontainer" />
                <div className="asics-lett1">
                    Asics Collection 
                </div>
                <div className="asics-lett2">
                    전체 상품
                </div>
                    <div className="all-container">
                        {filterasics.map((shoe) => (
                                <div key={shoe.id} className="all-item">
                                    <Link to={`/shoes/${shoe.id}`} className="brand-link">
                                <img src={shoe.image} className="all-image" />
                                <p className="all-name">{shoe.name}</p>
                                    </Link>
                                    </div>
                        ))}
                    </div>
            </div>
        </>
    )
}

export default Asics;