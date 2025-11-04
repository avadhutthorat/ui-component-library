import { useState, useTransition } from "react";

export default function TransitionUse() {
  const [value, setValue] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const largeData = Array.from({ length: 10000 }).map((_, i) => `Item ${i}`);

  const renderList = (e) => {
    console.log("before");

    startTransition(() => {
      console.log("inside transition");
      const filterList = largeData.filter((name) =>
        name.toLocaleLowerCase().includes(value)
      );
      setFilterList(filterList);
    });
    console.log("after");
    setValue(e.target?.value?.toLocaleLowerCase() + "avadhut");
  };
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <input
        style={{
          border: "1px solid black",
        }}
        type="text"
        value={value}
        onChange={renderList}
      />

      {value &&
        filterList &&
        filterList.map((name) => {
          return <div key={name}>{name}</div>;
        })}
    </div>
  );
}
