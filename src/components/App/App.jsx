import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";

import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoding = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contaiter}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoding && <p>Please wait...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
}
