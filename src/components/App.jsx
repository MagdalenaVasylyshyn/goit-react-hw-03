import { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';

const getInitialContacts = () => {
    const storageData = localStorage.getItem('contacts');

    if (storageData) {
        try {
            return JSON.parse(storageData);
        }
        catch(error) {
            console.error(error.message);
        }
    }

    return [];
}

const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts());
  const [search, setSearch] = useState('');
    
    function handleDeleteContact(id) {
    setContacts(contacts => contacts.filter(item => item.id !== id));
  }

  function handleAddContact(newContact) {
    setContacts(contacts => [...contacts, newContact]);
  }

  function handleSearch(curSearch) {
    setSearch(curSearch);
  }

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
    
  const filteredContacts =
    search.trim() === ''
      ? contacts.slice()
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={handleAddContact} />
            <SearchBox search={search} onSearch={handleSearch}>Find contacts by name</SearchBox>
            <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
        </div>
    )
}


export default App