import { useParams } from "react-router-dom";
import '../styles/ShoeDetail.css';

function ShoeDetail({ shoes }) {
  const { id } = useParams();
  const shoe = shoes.find((shoe) => shoe.id === parseInt(id));
  const sizeData = {
    header: ["KR", "250", "255", "260", "265", "270", "275", "280", "285", "290"],
    rows: [
      { label: "US (M)", values: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"] },
      { label: "EU", values: ["39.5", "40", "40.5", "41", "42", "42.5", "43", "44", "44.5"] },
      { label: "UK", values: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"] },
    ],
  };

  const handleSearch = () => {
    const query = encodeURIComponent(shoe.name); // 검색어 URL 인코딩
    const searchUrl = `https://www.google.com/search?q=${query}`; // Google 검색 URL
    window.open(searchUrl, "_blank"); // 새 탭에서 검색 실행
  };

  if (!shoe) {
    return <p className="error-message">Shoe not found</p>;
  }

  return (
    <>
    <div className="shoe-detail-container">
      <div className="shoe-detail-content">
        <img src={shoe.image} className="shoe-image" />
        <div className="shoe-info">
            <h1 className="shoe-name">{shoe.name}</h1>
            <form action="#" className="size-form">
                    <select name="sizes" id="size">
                        <option value="select">모든사이즈</option>
                        <option value="240">220</option>
                        <option value="240">230</option>
                        <option value="240">240</option>
                        <option value="250">250</option>
                        <option value="260">260</option>
                        <option value="270">270</option>
                        <option value="280">280</option>
                        <option value="290">290</option>
                    </select>
            </form>
            <button className="buy-button" onClick={handleSearch}>구매하러 가기</button>
        </div>
      </div>
    </div>
    <div className="size-info">
        <h2 className="size-info-title">사이즈 정보</h2>
        <div className="size-info-table-container">
          <table className="size-info-table">
            <thead>
              <tr>
                {sizeData.header.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizeData.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.label}</td>
                  {row.values.map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="size-info-note">
          ※ 해당 사이즈 정보는 고객 이해를 위한 참고용이며, 브랜드마다 차이가 있을 수 있습니다.
          정확한 내용은 실물 상품 기준으로 확인해 주시기 바랍니다.
        </p>
      </div>
    </>
  );
}

export default ShoeDetail;
