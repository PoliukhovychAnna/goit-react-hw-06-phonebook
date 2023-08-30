import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactFormContainer } from './Styled.ContactForm';
import { addContact } from 'redux/contactsSlice';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsState = useSelector(getContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const isNameInContacts = contactsState.find(contact =>
      contact.name
        .toLowerCase()
        .includes(form.elements.name.value.toLowerCase())
    );

    const isNumberInContacts = contactsState.find(
      contact => contact.number === form.elements.number.value
    );

    if (isNameInContacts) {
      toast.warn(`${form.elements.name.value} is already in contacts`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      form.reset();
      return;
    }

    if (isNumberInContacts) {
      toast.warn(
        `Contact with number ${form.elements.number.value} already exists`,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
      form.reset();
      return;
    }

    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <label>
        <h4>Name</h4>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <h4>Number</h4>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </ContactFormContainer>
  );
};
