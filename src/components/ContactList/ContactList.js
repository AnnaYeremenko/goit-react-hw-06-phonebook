import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { stateContacts } from '../../redux/contactsSlice';
import { stateFilters } from 'redux/filtersSlice';
import { ButtonDelete, ContactItem, ListContact } from './ContactList.styled';

export const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(stateFilters);
    const contacts = useSelector(stateContacts);
    console.log(contacts);

    const getVizibleContact = () => {
        return filter 
        ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
        : contacts;
    };
    const vizibleContact = getVizibleContact()
    console.log(vizibleContact);

    return (
        <ListContact>
            {vizibleContact.map(contact => (
                <ContactItem key={contact.id}>
                    {contact.name} : {contact.number}
                    <ButtonDelete type="button" onClick={() => dispatch(deleteContact(contact.id))}>
                        Delete
                    </ButtonDelete>
                </ContactItem> 
            ))}
        </ListContact>
    );
};