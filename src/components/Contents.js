import React, { useContext } from "react";
import { themeData } from "../App";

export default function Contents() {
  return (
    <div style={useContext(themeData)}>
      <h1>React Series</h1>
      <h2>Data migration between components with useContext</h2>
    </div>
  );
}
