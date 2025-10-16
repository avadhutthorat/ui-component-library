import RenderList from "./renderList";
import { treeData as data, type treeDataType } from "./data.ts";
import { useState } from "react";
import { STATUS } from "./constants.ts";

export default function IndeterminateCheckbox() {
  const [treeData, setTreeData] = useState(data);

  const traverseDescendants = (tree = [], route = [], target = "") => {
    if (!route?.length) {
      tree?.map((item: treeDataType) => {
        if (item.id == target) {
          item.status =
            item.status === STATUS.CHECKED ? STATUS.UNCHECKED : STATUS.CHECKED;
        }
      });
      console.log("leaf -", tree);
      return tree;
    }

    return tree?.find((item: treeDataType) => {
      if (item.id == route.at(-1)) {
        route.pop();
        const returnedTree = traverseDescendants(
          item?.children || [],
          route,
          target
        );

        item.status = STATUS.INDETERMINATE;
        if (returnedTree) {
          item.children = JSON.parse(JSON.stringify(returnedTree));
        }
        if (item?.children?.length) {
          const isAllChildChecked = item.children?.every(
            (child) => child.status === STATUS.CHECKED
          );

          const isAllChildUnChecked = item.children?.every(
            (child) => child.status === STATUS.UNCHECKED
          );

          if (isAllChildChecked) {
            item.status = STATUS.CHECKED;
          }

          if (isAllChildUnChecked) {
            item.status = STATUS.UNCHECKED;
          }
        }
      }
    });
  };

  const traverseAncestors = (tree = [], route = [], target = "") => {
    console.log("traverseAncestors -", { tree, target });
    if (!route?.length) {
      tree?.map((item: treeDataType) => {
        if (item.id == target) {
          item.status = STATUS.CHECKED;
        }
      });
      return tree;
    }

    return tree?.find((item: treeDataType) => {
      if (item.id == target) {
        traverseAncestors(item?.children || [], route, target);

        item.status = STATUS.CHECKED;
      }
    });
  };

  const clickHandler = (data: treeDataType) => {
    console.log("Clicked", data);

    const route: string[] = data.parent || [];

    const clonedTree = JSON.parse(JSON.stringify(treeData));

    // traverse childrens
    traverseDescendants(clonedTree, route, data.id);

    // Traverse parents
    traverseAncestors(clonedTree, route, data.id);

    setTreeData(clonedTree);
  };
  return (
    <div>
      <RenderList treeData={treeData} clickHandler={clickHandler} />
    </div>
  );
}
