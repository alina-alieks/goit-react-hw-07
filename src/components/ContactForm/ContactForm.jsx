import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short! Min 3 chars")
    .max(50, "Too Long! Max 50 chars")
    .required("Required"),
  number: Yup.string()
    .trim()
    .min(3, "Too Short! Min 3 chars")
    .max(50, "Too Long! Max 50 chars")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handelSubmit = (values, actions) => {
    const newValues = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(addContact(newValues));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handelSubmit}
    >
      <Form className={css.form}>
        <label className={css.labelFormInput}>
          Name
          <Field className={css.formInput} type="text" name="name" />
          <ErrorMessage className={css.erros} name="name" component="span" />
        </label>
        <label className={css.labelFormInput}>
          Number
          <Field className={css.formInput} type="tel" name="number" />
          <ErrorMessage className={css.erros} name="number" component="span" />
        </label>
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
