// import react from "react";
import image from "../Images/pic1.jpg";
import styled from "styled-components";

export const Landing = () => {
    return (
    <LandingStyled> 
   
    <img src={image} alt="home_picture" />
 
    </LandingStyled>
    );
};

const LandingStyled = styled.div`
img {
    margin-top: 0px;
    width: 100%;
    height: 60rem;
    justify-content: center;
    align-items: center;
    opacity: 0.7; 
    display: flex;
  }`