import React from "react";
import "./DragDrop.css";

const List = ({ title }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", title);
  };
  
  return (
    <div
      className="lists"
      style={{ fontSize: "28px" }}
      draggable
      onDragStart={handleDragStart}
    >
      {title}
    </div>
  );
};

export default List;
