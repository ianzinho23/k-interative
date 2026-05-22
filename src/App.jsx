import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Carousel from "./components/Carousel";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/teoria" element={<CarouselPage initialSlide={0} />} />
        <Route path="/video" element={<CarouselPage initialSlide={1} />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  const handleAccess = () => {
    navigate("/teoria");
  };

  return (
    <div id="root">
      <Landing onAccess={handleAccess} />
    </div>
  );
}

function CarouselPage({ initialSlide }) {
  return (
    <div id="root">
      <Carousel initialSlide={initialSlide} />
    </div>
  );
}

export default App;
