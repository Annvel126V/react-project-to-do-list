import { Suspense, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import { Route, Router, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import Layout from "./components/Layout/Layout.jsx";
function App() {
  // 1. Створення стану для збереження списку завдань і тексту нового завдання
  const [tasks, setTasks] = useState([]); // Масив завдань
  const [newTask, setNewTask] = useState(""); // Текст нового завдання//

  // 2. Функція для обробки введення тексту
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // 3. Функція для додавання нового завдання
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]); // Додати нове завдання
      setNewTask(""); // Очистити поле вводу
    }
  };

  // 4. Функція для позначення завдання як виконаного
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // 5. Функція для видалення завдання
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/tasks"
            element={
              <div>
                <h1>To-Do List</h1>
                <TaskInput
                  newTask={newTask}
                  handleInputChange={handleInputChange}
                  addTask={addTask}
                />
                <TaskList
                  tasks={tasks}
                  toggleTaskCompletion={toggleTaskCompletion}
                  deleteTask={deleteTask}
                />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/tasks"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/tasks" />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
