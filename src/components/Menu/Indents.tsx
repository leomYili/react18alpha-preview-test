import React from "react";

import styles from "./index.module.scss";

interface IndentsProp {
  level: number;
}

const Indents = ({ level }: IndentsProp) => {
  let list: any[] = [];

  for (let i = 0; i < level; i++) {
    list.push(
      <div
        className={`relative h-full inline-block w-7 ${styles["unit"]}`}
      ></div>
    );
  }

  return (
    <div
      className={`whitespace-nowrap self-stretch select-none ${styles["indents"]}`}
    >
      {list}
    </div>
  );
};

export default Indents;
