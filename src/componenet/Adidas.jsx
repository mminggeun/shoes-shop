import '../styles/Adidas.css';
import {shoes} from '../data/Shoesdata';
import adidaspage from '../assets/logos/adidaspage.png';

function Adidas() {

    const filteradidas = shoes.filter((shoe) => shoe.image.includes("adidas"))

    return (
        <>
            <div className="adidas-container1">
                <img src = {adidaspage} className="adidascontainer" />
                <div className="adidas-lett1">
                    Adidas Collection 
                </div>
                <div className="adidas-lett2">
                    전체 상품
                </div>
                    <div className="all-container">
                        {filteradidas.map((shoe, index) => (
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

export default Adidas;