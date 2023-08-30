import { filterValue } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { StyledFilter } from './Styled.Filter';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <StyledFilter>
      Find contact by name
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(filterValue(event.target.value))}
      />
    </StyledFilter>
  );
};
