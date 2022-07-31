import React, { useEffect, useState } from "react";
import ProductPreviewCard from "./ProductPreviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductsPreview = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3003/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.data))
      .catch((err) => console.log(err));
  }, []);

const onAddProduct = (product) => {
    console.log(product);
}

  return (
    <div className="container mx-auto pb-4 w-4/3 text-white mt-5 bg-black">
      <Carousel responsive={responsive}>
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <div key={index} className="w-full p-3">
                <ProductPreviewCard product={product} onAddProduct={onAddProduct} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default ProductsPreview;
