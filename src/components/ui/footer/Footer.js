import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.h3}>The Most Wanted Burgers Here</h3>
      <span>
        First Avenue 763 | 0800 100077 mostwanted_b@mostwanted.com | © All
        rights reserved 2023
      </span>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/mostwantedburgers">
          <FontAwesomeIcon icon={faFacebook} color="black"/> 
        </a>
        <a href="https://www.instagram.com/mostwantedburgers">
          <FontAwesomeIcon icon={faInstagram} color="black"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
