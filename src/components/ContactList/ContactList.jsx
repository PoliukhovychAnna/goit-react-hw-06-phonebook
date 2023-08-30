import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { List } from './Styled.List';
export const ContactList = () => {
  const getContacts = useSelector(state => state.contacts);
  console.log(getContacts);
  const getFilterValue = useSelector(state => state.filter);

  const filteredContacts = getContacts.filter(contact =>
    contact?.name?.toLowerCase().includes(getFilterValue.toLowerCase())
  );

  if (!filteredContacts?.length) {
    return <p>No contacts added yet.</p>;
  }

  return (
    <List>
      {filteredContacts.map(contact => {
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
