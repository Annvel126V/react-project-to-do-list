const TaskInput = ({ newTask, handleInputChange, addTask }) => {
  return (
    <div>
      <div>
        {/* Поле вводу */}
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        {/* Кнопка додавання */}
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
};

export default TaskInput;
