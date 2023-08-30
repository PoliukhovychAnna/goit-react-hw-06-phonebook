import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { StyledContact } from './Styled.Contact';
export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <StyledContact key={id}>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </StyledContact>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
