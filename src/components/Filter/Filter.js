import { useDispatch, useSelector } from 'react-redux';
import { FilterTitle, FilterFind, FilterInput } from './Filter.styled';
import { setFilterContact, stateFilters } from 'redux/filtersSlice';

export const Filter = () => {
    const filter = useSelector(stateFilters);
    const dispatch = useDispatch();

    const changeFilter = event => {
        const value = event.target.value.toLower().trim();
        dispatch(setFilterContact(value));
    };
    return (
        <FilterTitle>
            <FilterFind>Find contacts by name</FilterFind>
            <FilterInput type="text" value={filter} onChange={changeFilter}/>
        </FilterTitle>
    );
};