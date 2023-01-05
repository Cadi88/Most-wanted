import React from "react";
import { Image } from "@mantine/core";

import styles from "./Header.module.css";
import LinkButton from "./LinkButton";
import mwLogo from "../../assets/svg/most_logo_XS.svg";

const Header = () => {
  let textLink1 = "MW";
  let textLink2 = "Menu";
  let textLink3 = "Contact us";

  return (
    <div className={styles.navHeader}>
      <LinkButton route='/'>
        <div className={styles.smLogo}>
          <Image radius="md" src={mwLogo} alt="Most wanted" />
        </div>
      </LinkButton>
      <LinkButton route="/api/menu">{textLink2}</LinkButton>
      <LinkButton route="/contactus">{textLink3}</LinkButton>
    </div>
  );
};

export default Header;
