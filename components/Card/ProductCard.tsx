import React from "react";

type Props = {
    title: string,
    description: String,
    brand: number,
    category: String,
    thumbnail: String,
    price: number,
    rating: number,
    stock: number,
    


};


const ProductCard = (props: Props) => {
  return (
          <div className="wrapper">
            <div className="product-info">
              <div className="product-text">
                <div className="product-img">
                  <img
                    src={props.thumbnail}
                    alt="product"
                  />
                </div>
                <div>
                  <h1>{props.title}</h1>
                  <h2>by {props.brand}</h2>
                  <p>
                    {props.description}
                  </p>
                </div>
              </div>

              <div className="productmoreinfo flex mt-2">
                <div className="flex">
                  <div>
                    <span>rating: {props.rating}</span>
                  </div>
                  <div className="mx-2" > 
                    <span>|</span>
                  </div>
                </div>
                <div className="flex "  >
                  <div>
                    <span>{props.category}</span>
                  </div>
                  <div className="mx-2" >
                    <span>|</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>stock: {props.stock}</span>
                  </div>
                </div>
              </div>

              <div className="product-price-btn">
                <p>
                  <span>{props.price}</span>$
                </p>
                <button type="button">buy now</button>
              </div>
            </div>
          </div>
  );
};

export default ProductCard;
