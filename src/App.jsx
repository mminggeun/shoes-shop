import './App.css'
import { BrowserRouter as   Router, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Nike from './component/Nike';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/nike" element= {<Nike />} />

           

          </Routes>
      </Router>
    </div>
  )
}

export default App
