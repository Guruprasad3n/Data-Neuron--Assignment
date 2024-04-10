import { useState } from "react";

import "./App.css";
import Resize from "./Components/Resize";
import PanelC from "./Components/PanelC";
import Task2 from "./Components/Task2";
import TaskList from "./Components/TaskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Resize /> */}
      <PanelC />
      {/* <TaskList/> */}
      {/* <Task2/> */}
    </>
  );
}

export default App;
