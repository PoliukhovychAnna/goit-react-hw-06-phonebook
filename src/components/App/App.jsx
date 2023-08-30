import React from 'react';
import {
  ContactsTitle,
  ContactContainer,
  PhonebookTitle,
  PhonebookContainer,
  WrapperTask,
} from './Styled.App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';

export const App = () => {
  return (
    <WrapperTask>
      <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </PhonebookContainer>
      <ContactContainer>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </ContactContainer>
      <ToastContainer />
    </WrapperTask>
  );
};
