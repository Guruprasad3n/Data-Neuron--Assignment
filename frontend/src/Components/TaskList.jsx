import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  Input,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import axiosInstance from "../utility/Instance";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [taskId, setTaskId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get(`/viewAllTasks`);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const openModal = (id, title, description) => {
    setTaskId(id);
    setUpdatedTitle(title);
    setUpdatedDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateTask = async (id, title, description) => {
    openModal(id, title, description);
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/updateData/${taskId}`, {
        title: updatedTitle,
        description: updatedDescription,
      });
      closeModal();
      fetchTasks();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const handleRemoveTask = async (id) => {
    try {
      await axiosInstance.delete(`/delete/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Failed to remove task:", error);
    }
  };

  return (
    <div>
      <h2>All Tasks</h2>
      <Table style={{ borderCollapse: "collapse", width: "100%" }}>
        <Thead>
          <Tr style={{ backgroundColor: "#f2f2f2" }}>
            <Th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Task Name
            </Th>
            <Th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Description
            </Th>
            <Th style={{ border: "1px solid #ddd", padding: "8px" }}>Update</Th>
            <Th style={{ border: "1px solid #ddd", padding: "8px" }}>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task, index) => (
            <Tr
              key={task._id}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f2f2f2",
              }}
            >
              <Td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {task.title}
              </Td>
              <Td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {task.description}
              </Td>

              <Td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <Button
                  colorScheme="blue"
                  onClick={() =>
                    handleUpdateTask(task._id, task.title, task.description)
                  }
                >
                  Update
                </Button>
              </Td>
              <Td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <Button
                  colorScheme="red"
                  onClick={() => handleRemoveTask(task._id)}
                >
                  Remove
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Description"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Update
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default TaskList;
