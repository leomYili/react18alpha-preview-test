import React from "react";

import { Menu } from "../../components/index";
import logo from "../../logo.svg";
import styles from "./index.module.scss";
import json from "./routers.json";

export default function Aside(props: any) {
  return (
    <div className={styles["aside"]}>
      <div
        className={
          "flex bg-blue-500 text-white border-solid border-2 border-blue-500 rounded"
        }
      >
        <img
          className={`${styles["logo"]} w-12 h-full overflow-hidden`}
          alt="logo"
          src={logo}
        />

        <h1 className={"text-xl text-center flex-1 leading-8"}>
          <span>REACT</span> <span>18</span> <span>preview</span>
        </h1>
      </div>
      <div
        className={"w-full h-px mt-5"}
        style={{ backgroundColor: "#e8e8e8" }}
      ></div>
      <Menu dataSource={json} />
    </div>
  );
}
