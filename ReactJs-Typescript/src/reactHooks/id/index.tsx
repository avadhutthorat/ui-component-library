import { useId, useState } from "react";

export default function IdHook() {
  const [name, setName] = useState<string>("");
  const [nameList, setNameList] = useState<{ id: string; name: string }[]>([]);

  return (
    <div>
      <input
        style={{ border: "1px solid black", margin: "10px" }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        style={{
          border: "1px solid black",
          padding: "5px 10px",
          margin: "5px 10px",
        }}
        onClick={() => {
          if (name) {
            setNameList((list) => [...list, { id: id, name }]);
          }
        }}
      >
        ADD
      </button>
      {nameList &&
        nameList.map((data) => {
          console.log(data);
          return <div key={data.id}>{data.name}</div>;
        })}
    </div>
  );
}
