import React from "react";
import { Image, Divider } from "@mantine/core";

import styles from "./HomeContent.module.css";
import logo from "../../../assets/svg/most_logo.svg";
import burgersImg from "../../../assets/img/burgers.png";

const Home = () => {
  return (
    <div className={styles.bgImg}>
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Most wanted" />
        </div>
        <div className={styles.contentDescription}>
          <p style={{ color: "white" }}>
            <span style={{ color: "#ea5709" }}>Best burgers in the town</span>
            <br /> Extra Quality Meat powered <br />
            by the best Sauces in Market
          </p>
          <div className={styles.imgContainer}>
            <Image src={burgersImg} />
          </div>
        </div>
        <div style={{color: 'white'}}> asd asd asd asd asd </div>
        <hr className={styles.divider}/>
        <div style={{color: 'white'}}> asd asd asd asd asd </div>
      </div>
    </div>
  );
};

export default Home;
