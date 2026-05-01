import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TheorySlide from "./slides/TheorySlide";
import VideoSlide from "./slides/VideoSlide";
import SENAI_logo from "../img/SENAI_logo_2024.png";

function Carousel({ initialSlide = 0 }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const trackRef = useRef(null);
  const TOTAL_SLIDES = 2;

  const goTo = (n) => {
    setCurrentSlide(Math.max(0, Math.min(TOTAL_SLIDES - 1, n)));
  };

  const slides = [
    { id: 0, label: "Teoria", component: <TheorySlide /> },
    { id: 1, label: "Vídeo", component: <VideoSlide /> },
  ];

  // Mouse events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const offset = e.clientX - startX;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -60) goTo(currentSlide + 1);
    else if (dragOffset > 60) goTo(currentSlide - 1);
    setDragOffset(0);
  };

  // Touch events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const offset = e.touches[0].clientX - startX;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (dragOffset < -60) goTo(currentSlide + 1);
    else if (dragOffset > 60) goTo(currentSlide - 1);
    setDragOffset(0);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") goTo(currentSlide + 1);
    if (e.key === "ArrowLeft") goTo(currentSlide - 1);
  };

  const transformValue = isDragging
    ? `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`
    : `translateX(-${currentSlide * 100}%)`;

  return (
    <div
      className="screen"
      id="carousel-screen"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="topbar">
        <div className="topbar-left">
          <img src={SENAI_logo} alt="SENAI" className="topbar-senai-logo" />
          <div className="topbar-title">
            K <span>Interativo</span>
          </div>
        </div>
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Voltar
        </button>
      </div>

      <div className="slide-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`slide-tab ${currentSlide === index ? "active" : ""}`}
            onClick={() => goTo(index)}
          >
            <span className="tab-num">{index + 1}</span> {slide.label}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper">
        <button
          className={`nav-arrow left ${currentSlide === 0 ? "hidden" : ""}`}
          onClick={() => goTo(currentSlide - 1)}
        >
          ‹
        </button>
        <button
          className={`nav-arrow right ${currentSlide === TOTAL_SLIDES - 1 ? "hidden" : ""}`}
          onClick={() => goTo(currentSlide + 1)}
        >
          ›
        </button>

        <div
          ref={trackRef}
          className={`carousel-track ${isDragging ? "dragging" : ""}`}
          style={{ transform: transformValue }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              {slide.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
