import React from 'react';
// import thistle from '../images/thiccle-16x9-compressor.jpg';
import styled from 'styled-components';

const BigPicDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const BigPic = styled.img`
  position: absolute;
  display: block;
  margin: auto;
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;


const Carousel = () => {
  return (
    <BigPicDiv>
      {/* <BigPic src={thistle} alt="thistle" /> */}
    </BigPicDiv>
  )
}

export default Carousel
