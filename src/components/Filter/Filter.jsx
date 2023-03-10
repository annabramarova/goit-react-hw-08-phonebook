import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';

import { Input, Stack } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Stack w='300px' mb={5}>
    <label htmlFor='filter'>Find contact by Name </label>
    <Input
      type="text"
      id='filter'
      placeholder="Find a person"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
    </Stack>
  );
};

export default Filter;