import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
