import { useState } from "react";
import "./App.css";
import PanelC from "./Components/PanelC";
import ResizableComponent from "./Components/Resize";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ResizableComponent />} />
        <Route path="/task-two" element={<ResizableComponent />} />
      </Routes>
    </>
  );
}

export default App;
