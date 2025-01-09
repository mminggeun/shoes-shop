import '../styles/Nike.css';
import {shoes} from '../data/Shoesdata';
import nikepage from '../assets/logos/nikepage.png';
import { Link } from 'react-router-dom';

function Nike() {

    const filternike = shoes.filter((shoe) => shoe.image.includes("nike"))

    return (
        <>
            <div className="nike-container1">
                <img src = {nikepage} className="nikecontainer" />
                <div className="nike-lett1">
                    Nike Collection 
                </div>
                <div className="nike-lett2">
                    전체 상품
                </div>
                    <div className="all-container">
                        {filternike.map((shoe) => (
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

export default Nike;