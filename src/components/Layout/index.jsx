import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import {
  GlobalStyle,
  StLayoutChildrenContainer,
  StLayoutContainer,
} from "./style";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <StLayoutContainer>
      <StLayoutChildrenContainer>
        {location.pathname !== "/login" ? <NavBar /> : null}
        {children}
      </StLayoutChildrenContainer>
      <GlobalStyle />
    </StLayoutContainer>
  );
};

export default Layout;
