import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import GlobalStyle from "./assets/GlobalStyle";
import "./App.css";

// ----------------------------------------------------------------

import NewsAndEvents from "./pages/NewsAndEvents";
import Discover3D3 from "../src/pages/Discover";
import EducationAndSocial from "../src/pages/Education";
import AboutUs from "../src/pages/About";

// ----------------------------------------------------------------

import AllNews from "./pages/AllNews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route
          path="/discover-3d3-and-dental-aligners"
          element={<Discover3D3 />}
        />
        <Route path="/education-and-social" element={<EducationAndSocial />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* -------------------------------------------------- */}
        <Route path="/all-news" element={<AllNews />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
