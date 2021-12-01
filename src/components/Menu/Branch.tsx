import React, { useState } from "react";

import Item from "./Item";

interface BranchProps {
  item: any;
  level: number;
  onSelected: any;
  selectId: any;
  setSelectId: any;
}

const Branch = ({
  item,
  level,
  onSelected,
  selectId,
  setSelectId,
}: BranchProps) => {
  const [expand, setExpand] = useState(item?.expand ?? false);

  const hasChildren = item?.children && item?.children.length !== 0;

  const renderBranches = () => {
    if (hasChildren) {
      return item?.children?.map((child: any) => {
        return (
          <Branch
            key={child.id}
            item={child}
            level={level + 1}
            onSelected={onSelected}
            selectId={selectId}
            setSelectId={setSelectId}
          />
        );
      });
    }
  };

  const onSelectNode = (id: any) => {
    setSelectId(id);
  };

  const toggleExpand = () => {
    setExpand((prev: boolean) => !prev);
  };

  return (
    <>
      <Item
        data={item}
        level={level}
        hasChildren={hasChildren}
        selectId={selectId}
        itemOnClick={onSelectNode}
        expand={expand}
        onToggle={toggleExpand}
      />
      {expand && renderBranches()}
    </>
  );
};

export default Branch;
