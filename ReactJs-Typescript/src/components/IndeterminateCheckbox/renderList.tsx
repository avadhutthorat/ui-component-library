import { useRef, useState } from "react";
import CheckBox from "./checkbox";
import { type treeDataType } from "./data";

type RenderListTypes = {
  treeData: treeDataType[];
  clickHandler: (data: treeDataType) => void;
  parents?: string[];
};

export default function RenderList({
  treeData,
  parents,
  clickHandler,
}: RenderListTypes) {
  const childRenderer = (tree: treeDataType) => {
    if (tree?.children?.length) {
      const parents = [tree.id, ...(tree.parent || [])];
      return (
        <RenderList
          treeData={tree.children}
          parents={parents}
          clickHandler={clickHandler}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <div style={{ marginLeft: "1.4rem" }}>
      {treeData.map((data) => {
        data.parent = parents;
        return (
          <div key={data.id}>
            <CheckBox data={data} clickHandler={() => clickHandler(data)} />
            {childRenderer(data)}
          </div>
        );
      })}
    </div>
  );
}
