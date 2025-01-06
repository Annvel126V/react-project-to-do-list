import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RagistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  return (
    <div>
      <div>
        <div>
          <h1>Sing up</h1>
        </div>
        <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div>
                <label>
                  <span>Name</span>
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div>
                <label>
                  <span>Email</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div>
                <label>
                  <span>Password</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div>
                <button type="submit">Register</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RagistrationForm;
