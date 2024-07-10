import React, { useState } from "react";
import "./DragDrop.css";

const Box = () => {
  const [droppedItem, setDroppedItem] = useState("");

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    setDroppedItem(data);
  };

  return (
    <div className="box" onDragOver={handleDragOver} onDrop={handleDrop}>
      <i>{droppedItem ? droppedItem : "Drop Here"}</i>
    </div>
  );
};

export default Box;
