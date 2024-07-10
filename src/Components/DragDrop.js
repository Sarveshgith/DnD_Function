import React from "react";
import "./DragDrop.css";
import List from "./List";
import Box from "./Box";

const Lists = [
  "First Name",
  "Last Name",
  "Email",
  "Address",
  "Phone No",
  "Password",
  "Confirm Password",
  "Pet Name",
];

const DragDrop = () => {
  return (
    <div className="overlay">
      <div className="container">
        <div className="boxes">
          <div className="box-top">
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
          <div className="box-bottom">
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
        <div className="lists">
          {Lists.map((list, index) => {
            return <List key={list + index} title={list} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
