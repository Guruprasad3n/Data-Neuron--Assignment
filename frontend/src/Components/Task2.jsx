// App.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function Task2() {
  const [data, setData] = useState("");
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    try {
      const response = await axios.get("/api/count");
      setAddCount(response.data.addCount);
      setUpdateCount(response.data.updateCount);
    } catch (error) {
      console.error("Failed to fetch counts:", error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post("/api/addData", { data });
      fetchCount();
      setData("");
    } catch (error) {
      console.error("Failed to add data:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/api/updateData/:id", { data });
      fetchCount();
      setData("");
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  return (
    <div>
      <h1>Add/Edit Data</h1>
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
      <h2>Counts:</h2>
      <p>Add Count: {addCount}</p>
      <p>Update Count: {updateCount}</p>
    </div>
  );
}

export default Task2;
