import React from "react";

import style from "./index.module.scss";
import Aside from "./Aside";
import Article from "./Article";

export default function index(props: any) {
  return (
    <div className={style["layouts"]}>
      <Aside />
      <Article />
    </div>
  );
}
