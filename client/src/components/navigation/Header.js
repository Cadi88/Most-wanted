import React from "react";
import stylesHeader from "./Header.module.css";
import LinkButton from "./LinkButton";
import { Route } from "react-router-dom";
import logoMw from "../../assets/font-graffiti-MW-logo.png";

const Header = () => {
  let textLink1 = "Home";
  let textLink2 = "Menu";
  let textLink3 = "Contact us";

  return (
    <div className={stylesHeader.navHeader}>
      <img className={stylesHeader.logoMostWanted} src={logoMw} alt="MostWanted"/>
      <LinkButton route="/">{textLink1}</LinkButton>
      <LinkButton route="/api/menu">{textLink2}</LinkButton>
      <LinkButton route="/contactus">{textLink3}</LinkButton>
    </div>
  );
};

export default Header;
