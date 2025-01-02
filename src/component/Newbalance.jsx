import '../styles/Newbalance.css';
import {shoes} from '../data/Shoesdata';
import newbalancepage from '../assets/logos/newbalancepage.png';

function Newbalance() {

    const filternewbalance = shoes.filter((shoe) => shoe.image.includes("newbalance"))

    return (
        <>
            <div className="newbalance-container1">
                <img src = {newbalancepage} className="newbalancecontainer" />
                <div className="newbalance-lett1">
                    NewBalance Collection 
                </div>
                <div className="newbalance-lett2">
                    전체 상품
                </div>
                    <div className="all-container">
                        {filternewbalance.map((shoe, index) => (
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

export default Newbalance;