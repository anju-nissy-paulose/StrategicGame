import { useCallback, useEffect, useRef, useState } from "react";

const slideStyles = {
  width: "500px",
  height: "270px",
  borderRadius: "10px",
  // backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "270px",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const slidesContainerStyles = {
  display: "flex",
  height: "270px",
  transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "270px",
};

// The main method starts
const ProductSliderScreen = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    // backgroundImage: `url(${slides[slideIndex].url})`,
    width: '500px',
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: 500,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div>
        {/* div for 'Arrow' symbol*/}
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {/* maps the object into 'slide' variable */}
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            >
              {/* div element that displays the content */}
              <div class="hoverwrap">
                <a class="prod-img" href={slide.link} ><img src={slide.url} alt="img" width={500} height={270} /></a>
                <div class="hovercap">{slide.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* div element for 'dot' symbol*/}
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSliderScreen;