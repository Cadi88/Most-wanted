import React from "react";
import stylesHeader from "./Header.module.css";
import LinkButton from "./LinkButton";
import { Route } from "react-router-dom";

const Header = () => {
  let textLink1 = 'Home'
  let textLink2 = 'Menu'
  let textLink3 = 'Contact us'

  return (
    <div className={stylesHeader.navHeader}>
      <LinkButton route='/'>{textLink1}</LinkButton>
      <LinkButton route='/menu'>{textLink2}</LinkButton>
      <LinkButton route='/contactus'>{textLink3}</LinkButton>
    </div>
  );
};

export default Header;
