import { useState } from "react";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input}
        type="tel"
        placeholder="Phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
