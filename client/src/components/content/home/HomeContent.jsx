import React from "react";
import { Image, Divider } from "@mantine/core";

import styles from "./HomeContent.module.css";
import logo from "../../../assets/svg/most_logo.svg";
import burgersImg from "../../../assets/img/burgers.png";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Most wanted" />
        </div>

        <div className={styles.contentDescription}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Best burgers in the town</span>
            <span style={{ color: "white" }}>
              Extra Quality Meat powered <br />
              by the best Sauces in Market
            </span>
          </div>

          <div className={styles.imgContainer}>
            <Image src={burgersImg} />
          </div>
        </div>

        <div className={styles.bottomDescription}>
          <div style={{ color: "white" }}> asd asd asd asd asd </div>
          <hr className={styles.divider} />
          <div style={{ color: "white" }}> asd asd asd asd asd </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
