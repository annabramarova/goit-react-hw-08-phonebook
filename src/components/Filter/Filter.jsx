import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterName, Label} from './Filter.styled'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Fragment>
    <Label>Find contact by Name </Label>
    <FilterName
      type="text"
      name="filter"
      placeholder="Find a person"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
    </Fragment>
  );
};

export default Filter;