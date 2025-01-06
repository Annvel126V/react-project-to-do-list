import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error("Something went wrong..");
      });
    options.resetForm();
  };
  return (
    <div>
      <div>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div>
                <label>
                  <span>Email</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label>
                  <span>Password</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label>
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
