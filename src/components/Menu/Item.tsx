import React, { useState } from "react";

import Indents from "./Indents";

interface ItemProps {
  hasChildren: boolean;
  level: number;
  selectId: any;
  onToggle: any;
  itemOnClick: any;
  expand: boolean;
  data: any;
}

const Item = ({
  data,
  hasChildren,
  level,
  selectId,
  onToggle,
  expand,
  itemOnClick,
}: ItemProps) => {
  return (
    <div className={"flex leading-6"} style={{ margin: "12px 0" }}>
      <Indents level={level} />
      <div
        className={
          "w-6 h-6 border-2 border-solid rounded-full mr-2 bg-blue-500 relative cursor-pointer"
        }
        style={{
          borderColor: "#e8e8e8",
        }}
        onClick={hasChildren && onToggle}
      >
        {hasChildren && expand && (
          <div
            className={
              "bg-white absolute w-6/12 h-2/4 left-1/4 top-1/4 rounded-full"
            }
          ></div>
        )}
      </div>
      <div
        className={`${
          selectId === data?.id ? "bg-gray-400 " : ""
        } cursor-pointer`}
        onClick={() => itemOnClick(data.id)}
      >
        {data?.label}
      </div>
    </div>
  );
};

export default Item;
