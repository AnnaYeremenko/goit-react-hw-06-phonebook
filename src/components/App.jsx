import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Title>
        <h1>Phonebook</h1>
        <ContactForm />
      <ContactsTitle>
        <h2>Contacts</h2>
        <Filter />
          <ContactList/>
        </ContactsTitle>
      </Title>
    </div>
  );
};
