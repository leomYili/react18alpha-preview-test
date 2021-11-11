import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./index.module.scss";

export default function Article(props: any) {
  return (
    <div className={styles["article"]}>
      这是主体内容,不断切换
      <p style={{ height: 2000 }}>
        <Outlet />
      </p>
    </div>
  );
}
