import { useDeferredValue, useEffect, useState, type ChangeEvent } from "react";

export default function DefferedValue() {
  const [value, setValue] = useState("");
  const [filterList, setFilterList] = useState<string[]>([]);
  const deferredValue = useDeferredValue(value);
  const largeData = Array.from({ length: 10000 }).map((_, i) => `Item ${i}`);

  const renderList = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Updating set value");
    setValue(e.target?.value?.toLocaleLowerCase());
  };

  useEffect(() => {
    console.log("Updating list");
    const filterList = largeData.filter((name) =>
      name.toLocaleLowerCase().includes(value)
    );
    setFilterList(filterList);
  }, [deferredValue]);

  console.log("setvalue -", value);
  console.log("deffred value -", deferredValue);
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
