import React, { useEffect, useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./ResizableComponent.css";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Container,
} from "@chakra-ui/react";
import axiosInstance from "../utility/Instance";
import TaskList from "./TaskList";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const ResizableComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const handleAdd = async () => {
    try {
      await axiosInstance.post("/addData", { title, description });
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
      const response = await axiosInstance.get("/count");
      setAddCount(response.data.addUpdateCount.addCount);
      setUpdateCount(response.data.addUpdateCount.updateCount);
    } catch (error) {
      console.error("Failed to fetch counts:", error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const [layout, setLayout] = useState([
    { i: "1", x: 0, y: 0, w: 6, h: 3 },
    { i: "2", x: 6, y: 0, w: 6, h: 3 },
    { i: "3", x: 0, y: 2, w: 12, h: 4 },
  ]);

  const onResize = (layout, oldItem, newItem) => {
    setLayout(layout.map((item) => (item.i === oldItem.i ? newItem : item)));
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ResponsiveReactGridLayout
      resizeHandles={["s", "w", "e", "n"]}
      className="layout"
      layouts={{ lg: layout }}
      onResize={onResize}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
    >
      {layout.map((item) => (
        <div
          key={item.i}
          data-grid={item}
          style={{ border: "1px solid red" }}
          onClick={handleContentClick}
        >
          <div className="resizable-content">
            {item.i === "1" ? (
              <div className="styleBox">
                <Container>
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
                    <FormLabel>Description</FormLabel>
                    <Input
                      type="text"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                  <Button onClick={handleAdd}>Add Task</Button>
                </Container>
              </div>
            ) : item.i === "2" ? (
              <div>
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
                    <span style={{ fontSize: "20px" }}>{updateCount}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <TaskList />
              </div>
            )}
          </div>
        </div>
      ))}
    </ResponsiveReactGridLayout>
  );
};

export default ResizableComponent;
