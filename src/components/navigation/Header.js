import React from "react";
import stylesHeader from "./Header.module.css";
import LinkButton from "./LinkButton";

const Header = () => {
  let link1 = 'Home'
  let link2 = 'Menu'
  let link3 = 'Contact us'

  return (
    <div className={stylesHeader.navHeader}>
      <LinkButton>{link1}</LinkButton>
      <LinkButton>{link2}</LinkButton>
      <LinkButton>{link3}</LinkButton>
    </div>
  );
};

export default Header;
