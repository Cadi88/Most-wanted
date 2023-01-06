import React from "react";
import { Image } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";
import LinkButton from "./LinkButton";
import mwLogo from "../../assets/svg/most_logo_XS.svg";

const Header = () => {
  let textLink1 = "MW";
  let textLink2 = "Menu";
  let textLink3 = "Contact us";

  return (
    <div className={styles.navHeader}>
      <div className={styles.buttonsContainer}>
        <LinkButton route="/">
          <div className={styles.smLogo}>
            <Image src={mwLogo} alt="Most wanted" />
          </div>
        </LinkButton>
        <LinkButton route="/api/menu">{textLink2}</LinkButton>
        <LinkButton route="/contactus">{textLink3}</LinkButton>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faSearch}
          color="white"
          style={{ cursor: "pointer", margin: '30px' }}
        />
      </div>
    </div>
  );
};

export default Header;
