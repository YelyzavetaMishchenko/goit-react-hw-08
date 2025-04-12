import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const trimmed = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.password) return;

    dispatch(register(trimmed));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Name
          <Field type="text" name="name" required />
        </label>
        <label>
          Email
          <Field type="email" name="email" required />
        </label>
        <label>
          Password
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
