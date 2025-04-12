import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const trimmed = {
      email: values.email.trim(),
      password: values.password.trim(),
    };

    if (!trimmed.email || !trimmed.password) return;

    dispatch(login(trimmed));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" required />
        </label>
        <label>
          Password
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
