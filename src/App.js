import "./App.css";
import React, { useState } from "react";
import Contents from "./components/Contents";

export const themeData = React.createContext();

const theme = {
  dark: {
    color: "white",
    backgroundColor: "black",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  },
};

function App() {
  // const access = "Sukru Erdi Yildirim";
  const [accessColor, setAccessColor] = useState(theme.light);
  function change() {
    if (theme.dark === accessColor) {
      setAccessColor(theme.light);
    } else {
      setAccessColor(theme.dark);
    }
  }
  return (
    <div className="App">
      <button onClick={change}>
        {theme.dark === accessColor ? "Light" : "Dark"}
      </button>
      <themeData.Provider value={accessColor}>
        <Contents></Contents>
      </themeData.Provider>
    </div>
  );
}

export default App;
