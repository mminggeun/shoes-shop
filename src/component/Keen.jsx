import '../styles/Keen.css';
import {shoes} from '../data/Shoesdata';
import { Link } from 'react-router-dom';
import keenpage from '../assets/logos/keenpage.png';

function Keen() {

    const filterkeen = shoes.filter((shoe) => shoe.image.includes("keen"))

    return (
        <>
            <div className="keen-container1">
                <img src = {keenpage} className="keencontainer" />
                <div className="keen-lett1">
                    Keen Collection 
                </div>
                <div className="keen-lett2">
                    전체 상품
                </div>
                    <div className="all-container">
                        {filterkeen.map((shoe) => (
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

export default Keen;