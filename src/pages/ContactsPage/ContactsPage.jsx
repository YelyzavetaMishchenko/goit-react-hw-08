import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsPage() {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
