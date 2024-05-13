import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.contactDiscription}>
        <p>
          <IoPersonSharp className={css.icon} size="14" />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} size="14" />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
}
