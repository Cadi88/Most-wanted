import React from "react";
import { Image } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NeonButton from "../ui/neonButton/NeonButton";

import styles from "./Header.module.css";
import LinkButton from "./LinkButton";
import mwLogo from "../../assets/svg/most_logo_XS.svg";

const Header = () => {
  let textLink1 = mwLogo;
  let textLink2 = "Menu";
  let textLink3 = "Contact us";

  return (
    <div className={styles.navHeader}>
      <div className={styles.buttonsContainer}>
        <LinkButton route="/">
          <div className={styles.smLogo}>
            <Image src={textLink1} alt="Most wanted" />
          </div>
        </LinkButton>
        <LinkButton route="/api/menu">{textLink2}</LinkButton>
        <LinkButton route="/contactus">{textLink3}</LinkButton>
      </div>

      <div className={styles.burgerMenuContainer}>
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          color="white"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div>{/* may we will add buttons here */}</div>
    </div>
  );
};

export default Header;
