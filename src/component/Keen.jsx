import '../styles/Keen.css';
import {shoes} from '../data/Shoesdata';
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
                        {filterkeen.map((shoe, index) => (
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

export default Keen;