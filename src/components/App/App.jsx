import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <div className={styles.form}>
          <ContactForm />
        </div>
        <SearchBox />
        <div className={styles.contactsContainer}>
          <ContactList />
        </div>
      </div>
    </div>
  );
}
