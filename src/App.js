import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import DragDrop from "./Components/DragDrop";
import "./App.css";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <DragDrop />
      </div>
    </DndProvider>
  );
};

export default App;
