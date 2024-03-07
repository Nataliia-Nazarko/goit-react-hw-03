import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contactCard}>
      <ul className={css.contactDetails}>
        <li className={css.contactItem}>
          <IoPersonSharp className={css.contactIcon} />
          {name}
        </li>
        <li className={css.contactItem}>
          <FaPhone className={css.contactIcon} />
          {number}
        </li>
      </ul>
      <button className={css.contactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
