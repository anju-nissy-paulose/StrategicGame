import ProductSliderScreen from "./ProductSliderScreen";
const ProductSlider = () => {
  //object containing detail for bg image, link and category for online products
  const slides = [
    { url: "http://localhost:3000/images/gameset-img.jpg", link: "/Puzzle", category: "Game Set"},
    { url: "http://localhost:3000/images/gamebook-img.png", link: "/Strategy", category: "Game Books"},
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ProductSliderScreen slides={slides} parentWidth={500} />
      </div>
    </div>
  );
};

export default ProductSlider;