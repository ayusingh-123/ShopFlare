import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NewsBanner from "./components/Footer/NewBanner/NewsBanner";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Detailprod from "./components/Products/Display/Detailprod";
import data from "./assets/data.json";

function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route
          path="/product/:id"
          element={<Detailprod data={data} />} // Pass the data as a prop
        />
      {/* <Route path="/category/:id" element={<Category/>} />
      <Route path="/product/:id" element={<Product/>} /> */}
    </Routes>
    <NewsBanner/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
