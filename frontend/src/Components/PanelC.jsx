import React, { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import TaskList from "./TaskList";
import axios from "axios";
import { Button, Input, FormControl, FormLabel } from "@chakra-ui/react";

function PanelC() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const handleResize = (event) => {
    event.preventDefault();
  };

  const handleAdd = async () => {
    try {
      await axios.post("https://data-neuron-assignment-ua7s.onrender.com/addData", { title, description });
      setTitle("");
      setDescription("");
      fetchCounts();
      fetchTasks();
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  const fetchCounts = async () => {
    try {
      const response = await axios.get("https://data-neuron-assignment-ua7s.onrender.com/count");
      setAddCount(response.data.addCount);
      setUpdateCount(response.data.updateCount);
    } catch (error) {
      console.error("Failed to fetch counts:", error);
    }
  };
  useEffect(() => {
    fetchCounts();
  }, []);

  console.log(addCount, updateCount);

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PanelGroup direction="vertical" style={{ gap: "5px" }}>
          <Panel style={{ flex: 1 }}>
            <PanelGroup direction="horizontal" style={{ gap: "5px" }}>
              <Panel
                style={{
                  flex: 1,
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormControl>

                <Button onClick={handleAdd}>Add Task</Button>
              </Panel>
              <PanelResizeHandle onResize={handleResize} />
              <Panel
                style={{
                  flex: 1,
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "2rem",
                    textDecoration: "underline",
                  }}
                >
                  Counts:
                </p>
                <div>
                  <p>
                    <strong style={{ textDecoration: "underline" }}>
                      Add Count:
                    </strong>{" "}
                    <span style={{ fontSize: "20px" }}>{addCount}</span>
                  </p>
                  <p>
                    <strong style={{ textDecoration: "underline" }}>
                      Update Count:
                    </strong>{" "}
                    <span style={{ fontSize: "20px" }}>{updateCount}</span>{" "}
                  </p>
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle onResize={handleResize} />
          <Panel
            style={{
              flex: 1,
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TaskList />
          </Panel>
        </PanelGroup>
      </div>
    </>
  );
}

export default PanelC;
