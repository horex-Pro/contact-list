
import { useEffect, useState } from 'react';
import './App.css';
import DataForm from './components/DataForm/DataForm';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App ()
{
  
  const [ contactsList, setContactsList ] = useState([]);

  const saveContactHandler = ( newContact ) =>
  {
    if ( newContact )
    {
      setContactsList( [ ...contactsList, newContact ] );
    }
  }

  const deleteHandler = (id) =>
  {
    const clonedContacts = [ ...contactsList ];

    const deletedContact = clonedContacts.find( item => item.id === id );

    const newContactList = clonedContacts.filter( item => item !== deletedContact );

    setContactsList(newContactList)
  }


  useEffect( () =>
  {
    const savedData = JSON.parse( localStorage.getItem( 'contacts' ) );
    if ( savedData ) setContactsList( savedData );

  },[])

  useEffect( () =>
  {
    if ( contactsList.length > 0 ) localStorage.setItem( 'contacts', JSON.stringify( contactsList ) );
  },
    [ contactsList ] );

  return (
    <div>
      <Header />
      <DataForm onSave={ saveContactHandler } />
      { contactsList.map( item =>
      {
        return <Contact name={ item.name } email={ item.email } number={ item.number } key={ item.id } id={ item.id } onDelete={ deleteHandler} />
      } ) }
      <ToastContainer/>
    </div>
  );
}

export default App;
