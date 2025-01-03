import '../styles/Nike.css';
import {shoes} from '../data/Shoesdata';
import nikepage from '../assets/logos/nikepage.png';

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
                        {filternike.map((shoe, index) => (
                                <div key={index} className="all-item">
                                <img src={shoe.image} className="all-image" />
                                <p className="all-name">{shoe.name}</p>
                                    </div>
                        ))}
                    </div>
            </div>
        </>
    )
}

export default Nike;