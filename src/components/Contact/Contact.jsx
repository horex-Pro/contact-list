import styles from './contact.module.css'

const Contact = ( { name, email, number , id  , onDelete} ) =>
{

    return ( 
        <div className={styles.contact}>
            <span>name: { name }</span>
            <span> email: { email }</span>
            <span> number: { number }</span>
            <button id={id} onClick={()=>onDelete(id)}>delete</button>
        </div>
     );
}
 
export default Contact;