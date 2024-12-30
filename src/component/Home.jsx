import React, { Component } from "react";
import Slider from "react-slick";
import '../styles/Home.css';
import adidas1 from '../assets/shoes/adidas1.png';
import adidas2 from '../assets/shoes/adidas2.png';
import adidas3 from '../assets/shoes/adidas3.png';
import newbalance1 from '../assets/shoes/newbalance1.png';
import newbalance2 from '../assets/shoes/newbalance2.png';
import newbalance3 from '../assets/shoes/newbalance3.png';
import keen1 from '../assets/shoes/keen1.png';
import keen2 from '../assets/shoes/keen2.png';
import keen3 from '../assets/shoes/keen3.png';
import asics1 from '../assets/shoes/asics1.png';
import asics2 from '../assets/shoes/asics2.png';
import asics3 from '../assets/shoes/asics3.png';
import adidaslogo from '../assets/logos/logo-adidas.png';
import nikelogo from '../assets/logos/logo-nike.png';
import keenlogo from '../assets/logos/logo-keen.png';
import asicslogo from '../assets/logos/logo-asics.png';

function Home() {
    const shoes = [
        adidas1, adidas2, adidas3, newbalance1, newbalance2,
        newbalance3, keen1, keen2, keen3, asics1, asics2, asics3
    ];

    const logos = [
        adidaslogo, nikelogo, keenlogo,asicslogo
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
    };
    
    return (
        <>
            <div className="home-container1">
                <div className="home-container-letter">
                    환영합니다
                    원하는 브랜드에서 원하는 신발을 지금 살펴보세요.
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요..."
                        className="search-input"
                    />
                    <button className="search-button">검색</button>
                </div>
            </div>
            <div className="home-container2">
                <div className="new-shoes1">
                    Just Dropped
                </div>
                <div className="new-shoes2">
                    발매상품
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                    {shoes.map((image, index) => (
                        <div key={index} className="slider-item">
                        <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
                </div>
                    ))}
                    </Slider>
                </div>
            </div>
            <div className="home-container3">
                <div className="brand-shoes1">
                    Brnad
                </div>
                <div className="brand-shoes2">
                    브랜드별 상품
                </div>
                <div className="logos-container">
                    {logos.map((image, index)=> (
                        <div key={index} className="logos-item">
                        <img src={image} alt={`Logo ${index +1}`} className="logos-image" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home; 