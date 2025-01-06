const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li
      //   key={index}
      style={{ textDecoration: task.completed ? "line-throw" : "none" }}
    >
      <span onClick={toggleTaskCompletion}>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
