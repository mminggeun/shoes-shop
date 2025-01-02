import '../styles/Asics.css';
import {shoes} from '../data/Shoesdata';
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
                        {filterasics.map((shoe, index) => (
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

export default Asics;