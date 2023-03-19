import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import Search from "./components/search";
import Infos from "./components/info";

function App() {
  const [element, setElement] = useState({});
  return (
    <div className="App">
      <Search setElement={setElement}/>
      <Infos element={element}/>
    </div>
  );
}
export default App
