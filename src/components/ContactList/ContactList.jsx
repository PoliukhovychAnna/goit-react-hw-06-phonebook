import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { List } from './Styled.List';
export const ContactList = () => {
  const contactsState = useSelector(getContacts);
  console.log(contactsState);
  const filterState = useSelector(getFilterValue);

  if (!contactsState?.length) {
    return <p>No contacts added yet.</p>;
  }

  const filteredContacts = contactsState.filter(contact =>
    contact.name.toLowerCase().includes(filterState.toLowerCase())
  );
  console.log(filteredContacts);

  //  const filteredContacts = contactsState?.filter(contact =>
  //    contact?.name?.toLowerCase().includes(filterState.toLowerCase())
  //  );

  if (!filteredContacts?.length) {
    return <p>No matches.</p>;
  }

  return (
    <List>
      {filteredContacts &&
        filteredContacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
    </List>
  );
};
