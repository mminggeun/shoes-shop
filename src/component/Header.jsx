    import '../styles/Header.css';
    import { Link, useNavigate } from 'react-router-dom';

    function Header() {
        return (
            <>
                <div className="header1">
                    <div className="header2-1">
                        <Link to="/" className="logo">SHEWS</Link>
                        <Link to="/">Nike</Link>
                        <Link to="/">Aidas</Link>
                        <Link to="/">NewBalance</Link>
                        <Link to="/">ASICS</Link>
                        <Link to="/">Keen</Link>
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