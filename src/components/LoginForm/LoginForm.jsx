import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useState } from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSubmit = async (values, actions) => {
    setError(""); // очищаем прошлую ошибку
    try {
      const result = await dispatch(login(values)).unwrap();
      if (!result || !result.token) {
        setError("Login failed. Please check your credentials.");
      }
    } catch (e) {
      setError("Login failed. Please try again.");
    }
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Email
            <Field className={styles.input} type="email" name="email" />
            <ErrorMessage
              className={styles.error}
              name="email"
              component="div"
            />
          </label>
          <label className={styles.label}>
            Password
            <Field className={styles.input} type="password" name="password" />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="div"
            />
          </label>
          {error && <div className={styles.error}>{error}</div>}
          <button className={styles.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
