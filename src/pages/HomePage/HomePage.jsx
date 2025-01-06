import s from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; // Імпорт селектора авторизації

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Перевірка стану авторизації
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Welcome to the To-Do List App, please register or login
      </h1>
      <p>
        Click{" "}
        <Link to={isLoggedIn ? "/tasks" : "/login"} className={s.link}>
          Tasks
        </Link>{" "}
        to manage your to-do list.
      </p>
    </div>
  );
};

export default HomePage;
