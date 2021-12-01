import React, { useState } from "react";

import Branch from "./Branch";

interface MenuProps {
  dataSource: any[];
  /**
   * 选中树的回调函数
   */
  onSelected?: any;
}

/**
 * 简单menu,每层自动收缩样式即可,全部展开模式,不需要收起
 * @param props
 * @returns
 */
const Menu = (props: any) => {
  const { dataSource, onSelected, children } = props;

  const [selectId, setSelectId] = useState(dataSource[0]?.id);

  return (
    <div className="menu-custom-body pt-2 pb-5 ">
      {dataSource.map((itemData: any) => (
        <Branch
          key={itemData?.id}
          item={itemData}
          selectId={selectId}
          setSelectId={setSelectId}
          level={0}
          onSelected={onSelected}
        />
      ))}
    </div>
  );
};

export default Menu;
