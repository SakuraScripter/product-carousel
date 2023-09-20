import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import Product from "./Product";
import { productData, responsive } from "./data";

const App = () => {
  const myProducts = productData.map((item) => (
    <Product imageurl={item.imageurl} name={item.name} price={item.price} />
  ));

  return (
    <div className="App">
      <h1>React Multi Carrousel</h1>
      <Carousel responsive={responsive}>{myProducts}</Carousel>
    </div>
  );
};

export default App;
