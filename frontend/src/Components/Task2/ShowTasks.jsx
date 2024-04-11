function ShowTasks() {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/viewAllTasks`);
      setTasks(response.data.tasks);
    } catch (error) {
      setError("Failed to fetch tasks. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return <>Add Task</>;
}

export default ShowTasks;
