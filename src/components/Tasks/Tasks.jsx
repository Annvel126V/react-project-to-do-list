import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../redux/tasks/operations";
import { useState } from "react";

const Tasks = ({ id, name, completed }) => {
  const dispatch = useDispatch;
  const [isChecked, setIsChecked] = (useState = completed || false);

  const onDelete = () => {
    dispatch(deleteTask(id));
  };

  const onCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    dispatch(updateTask({ id, completed: !isChecked }));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
      <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {name}
      </span>
      <button type="button" onClick={onDelete}>
        Delete !
      </button>
    </div>
  );
};

export default Tasks;
