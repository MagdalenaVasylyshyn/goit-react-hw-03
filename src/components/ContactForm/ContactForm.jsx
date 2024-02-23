import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';

export default function ContactForm({ onAddContact }) {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const initialValues = { name: '', number: '' };

     const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    number: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
     });
    
    function handleSubmit(values, actions) {
    onAddContact({
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    });
    actions.resetForm();
    }

      return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <FormInput id={nameFieldId} type="text" name="name">
          Name
        </FormInput>

        <FormInput id={numberFieldId} type="text" name="number">
          Number
        </FormInput>

        <button type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}


function FormInput({ id, type, name, children }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <Field type={type} name={name} id={id}></Field>
      <span>
        <ErrorMessage name={name} as="span" />
      </span>
    </div>
  );
}