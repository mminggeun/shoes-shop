    import '../styles/Header.css';
    import { Link, useNavigate } from 'react-router-dom';

    function Header() {
        return (
            <>
                <div className="header1">
                    <div className="header2-1">
                        <Link to="/" className="logo">SHEWS</Link>
                        <Link to="/nike">Nike</Link>
                        <Link to="/adidas">Aidas</Link>
                        <Link to="/newbalance">NewBalance</Link>
                        <Link to="/asics">Asics</Link>
                        <Link to="/keen">Keen</Link>
                    </div>
                    <div className="header2-2">
                        <Link to="/">로그인</Link>
                        <Link to="/">회원가입</Link>
                    </div>
                </div>
            
            </>
        )
    }

    export default Header;