
import { useState } from 'react';
import './App.css';
import DataForm from './components/DataForm/DataForm';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';

function App ()
{
  
  const [ contactsList, setContactsList ] = useState([]);

  const saveContactHandler = ( newContact ) =>
  {
    if ( newContact )
    {
      setContactsList([...contactsList,newContact])
    }
  }

  const deleteHandler = (id) =>
  {
    const clonedContacts = [ ...contactsList ];

    const deletedContact = clonedContacts.find( item => item.id === id );

    const newContactList = clonedContacts.filter( item => item !== deletedContact );

    setContactsList(newContactList)
  }

  return (
    <div>
      <Header />
      <DataForm onSave={ saveContactHandler } />
      { contactsList.map( item =>
      {
        return <Contact name={ item.name } email={ item.email } number={ item.number } key={ item.id } id={ item.id } onDelete={ deleteHandler} />
      })}
    </div>
  );
}

export default App;
