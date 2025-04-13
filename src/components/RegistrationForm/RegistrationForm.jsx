import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useState } from "react";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSubmit = async (values, actions) => {
    setError("");
    try {
      const result = await dispatch(register(values)).unwrap();
      if (!result || !result.token) {
        setError("Registration failed. Please try again.");
      }
    } catch (e) {
      setError("Registration failed. Please try again.");
    }
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create an account</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Name
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="div"
            />
          </label>
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
