import React from 'react';
import styled from 'styled-components';


const StyledNavbar = styled.header`
  display: flex;
  position: fixed;
  margin: 0 4em;
  padding: 10px;
  width: calc(100vw - 8em);
  color: #fff;
  background-color: rgba(37, 37, 37, 0.8);
  border-radius: 0 0 1em 1em;
  z-index: 2;
`;


const Navbar = (props) => {
  return (
    <StyledNavbar>
      hello<span role='img' aria-label='Camera'>📷</span>
    </StyledNavbar>
  );
}

export default Navbar;
