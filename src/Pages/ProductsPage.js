import { MainLayout } from "../Styles/Layout";
import styled from "styled-components";
import React from "react";
import popularProducts from "../Data/Products";
import Product from "../Components/Products";
import { Title } from "../Components/Title";


export const Products = () => {
    return (
      <ProductsViewStyled>
        <MainLayout>
        <Title title={"Products"} span={"Products"} />
          <div className="product">
            {popularProducts.map((product) => (
                <div className="product_card">
                 <Product 
                 img={product.img}
                 desc={product.desc}
                 pricing={product.pricing}
                   />
              </div>
            ))}
          </div>
        </MainLayout>
      </ProductsViewStyled>
    );
  };


const ProductsViewStyled = styled.style`
display: flex;
.product_card {
  display: flex;
  border: red solid 5px;
  flex-direction: row;
  flex-wrap: wrap;
  display: inline-flex;
}`
