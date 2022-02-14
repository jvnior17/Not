import React from "react";
import styled from "styled-components";


const Product = ({ img, price, desc }) => {
    return (
      <ProductsComponentStyled>
        <div className="card">
        <div className="card-image"> 
        <img src={img} alt="name"/>
        </div> 
        <div className="Description">{desc}</div> 
        <div className="pricing">{price}</div>      
        </div> 
      </ProductsComponentStyled>
  );
};

const ProductsComponentStyled = styled.div`
color:black;
  .card {
    text-decoration: none;
    flex: 1;
  }
  .card-image {
    align-text: center;
    border-radius: var(--spacing-l);
    filter: brightness(1) saturate(1.2) contrast(0.85);
    transform-origin: center;
    transform: scale(1) translateZ(0), translateX(-50%);
    transition: filter 200ms linear, transform 200ms linear;   
    img {
      height: 25rem;
      width: 25rem;
      border-radius: 20%;
    }
  }

  .card:hover {
    transition: all 0.2s ease-in-out;
  }
  .card:hover .card-overlay {
    transform: translateY(0);
  }
 
  .card:hover {
    .card-header {
      transform: translateY(0);
    }
    
    .card-image {
      transform: scale(1.05) translateZ(0);
    }
  }

`;
export default Product;
