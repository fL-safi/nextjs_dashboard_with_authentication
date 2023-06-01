import React, { useState, useEffect } from "react";
import ProductCard from "../components/Card/ProductCard";
import { useSession } from "next-auth/react";

type Props = {};

const products = (props: Props) => {
  const [productInfo, setProductInfo] = useState([]);

  const { data: session }: any = useSession();

  useEffect(() => {
    const productData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const response = await data.json();
      setProductInfo(response.products);
    };

    productData();
  }, []);

  return (
    <div>
      <div className="product-container">
        {productInfo &&
          productInfo.length &&
          productInfo.map((product: any) => {
            return (
              <div className="" key={product.id}>
                <ProductCard
                  title={product.title}
                  description={product.description}
                  brand={product.brand}
                  category={product.category}
                  image={product.thumbnail}
                  price={product.price}
                  rating={product.rating}
                  stock={product.stock}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default products;
