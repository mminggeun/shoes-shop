import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../styles/Home.css';
import {shoes, logos} from '../data/Shoesdata';


function Home() {
    
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
                    {shoes.map((shoe, index) => (
                        <div key={index} className="slider-item">
                        <img src={shoe.image} alt={shoe.name} className="slider-image" />
                        <p className="slider-name">{shoe.name}</p>
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
                    {logos.map((logo, index)=> (
                        <div key={index} className="logos-item">
                            <Link to={`/${logo.name}`} className="brand-link">
                        <img src={logo.image} alt={logo.name} className="logos-image" />
                        <p className="logo-name">{logo.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-container4">
                <div className="new-shoes1">
                    Full Collection
                </div>
                <div className="new-shoes2">
                    전체상품
                </div>
                <div className="all-container">
                    {shoes.map((shoe, index) => (
                        <div key={index} className="all-item">
                        <img src={shoe.image} alt={shoe.name} className="all-image" />
                        <p className="all-name">{shoe.name}</p>
                </div>
                    ))}
                </div>
            </div>
            <div className="home-container5">
                <div className="homepage-bot">
                    <p className="bot-text">
                    크림 주식회사 · 대표 김창욱사업자등록번호 : 570-88-01618 
                    사업자정보확인통신판매업 : 제 2021-성남분당C-0093호
                    사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 7층호스팅 
                    서비스 : 네이버 클라우드 ㈜</p> 
                    <p className="bot-text">
                        SHEWS(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 
                        본 상품은 개별 판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다.
                    </p>
                    <p className="bot-text">
                        단, 이용약관 및 정책, 기타 거래 체결 과정에서 고지하는 
                        내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 SHEWS(주)에 있습니다.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home; 