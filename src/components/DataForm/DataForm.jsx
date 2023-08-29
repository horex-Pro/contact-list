import { useEffect, useState } from "react";

const DataForm = ({onSave}) =>
{
    
    const [ contact, setContact ] = useState();


    useEffect( () =>
        {
        onSave( contact )
    }, [ contact ] )
    
    
    const submitHandler = (e) =>
    {
        setContact( {
            name: e.target.name.value,
            email: e.target.email.value,
            number: e.target.number.value,
            id:Math.floor(Math.random()*10)
        })
        e.preventDefault()

        /* reset the form */

        e.target.name.value = ''
        e.target.name.email = ''
        e.target.name.number = ''
       
    }

    return ( 
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" placeholder="Your name:" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" placeholder="Your email:" id="email" name="email" />
            <br />
            <label htmlFor="number">Phone number:</label>
            <br />
            <input type="number" placeholder="Your phone number:" name="number" />
            <br />
            <input type="submit" value='add contact'/>
        </form>
     );
}
 
export default DataForm;