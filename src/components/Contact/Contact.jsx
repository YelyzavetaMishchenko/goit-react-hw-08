import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contactCard}>
      <div className={styles.contactDetails}>
        <div className={styles.nameBlock}>
          <span>{contact.name}</span>
        </div>
        <div className={styles.phoneBlock}>
          <span>{contact.number}</span>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
