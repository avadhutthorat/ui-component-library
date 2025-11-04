import { useRef, useState } from "react";

export default function TextInput({ value, index, saveUpdateValueHandler }) {
  const [isInEditMode, setIsInEditMode] = useState({});
  const editedInputRef = useRef(null);
  const editHandler = (value, index) => {
    setIsInEditMode({
      value,
      index,
    });
  };

  const saveEditedText = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveUpdateValueHandler(index, editedInputRef.current.value);
      setIsInEditMode({});
    }
  };
  return (
    <td
      onClick={() => editHandler(value, index)}
      style={{ borderRight: "1px solid black" }}
    >
      {JSON.stringify(isInEditMode?.index) === JSON.stringify(index) ? (
        <input
          type="text"
          name="text-input"
          ref={editedInputRef}
          onKeyDown={saveEditedText}
        />
      ) : (
        value
      )}
    </td>
  );
}
