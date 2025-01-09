import './App.css'
import { BrowserRouter as   Router, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import ShoeDetail from './component/ShoeDetail';
import SearchResults from './component/SearchResults';
import Nike from './component/Nike';
import Adidas from './component/Adidas';
import Newbalance from './component/Newbalance';
import Asics from './component/Asics';
import Keen from './component/Keen';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {shoes} from './data/Shoesdata';

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element= {<Home shoes={shoes}/>} />
            <Route path="shoes/:id" element={<ShoeDetail shoes={shoes} />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/nike" element = {<Nike />} />
            <Route path="/adidas" element = {<Adidas />} />
            <Route path="/newbalance" element = {<Newbalance />} />
            <Route path="/asics" element = {<Asics />} />
            <Route path="/keen" element = {<Keen />} /> 
          </Routes>
      </Router>
    </div>
  )
}

export default App
