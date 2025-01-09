import React from "react";
import { useLocation, Link } from "react-router-dom";
import { shoes } from "../data/Shoesdata"; // 데이터 임포트
import '../styles/SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  console.log("Search query:", query);

  // 검색어를 기반으로 데이터 필터링
  const filteredShoes = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="search-resu">
    <h1>검색 결과</h1>
  {filteredShoes.length > 0 ? (
    <div className="search-results-container">
      {filteredShoes.map((shoe) => (
        <div key={shoe.id} className="search-result-item">
            <Link to={`/shoes/${shoe.id}`} className="brand-link">
          <img src={shoe.image} alt={shoe.name} className="result-image" />
          <p className="result-name">{shoe.name}</p>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <p>검색 결과가 없습니다.</p>
  )}
</div>

  );
};

export default SearchResults;
