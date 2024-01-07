import { useState, useEffect } from 'react';
import List from '../List';
import Form from '../Form';
import '../Styles.css';
import { Typography } from '@mui/material';


function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullName: 'Mehmet',
            phoneNumber: '124123'
        },
        {
            fullName: 'Ayşe',
            phoneNumber: '1234123'
        },
        {
            fullName: 'Nazlı',
            phoneNumber: '09213'
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id='container'>
            <Typography variant='h3'>CONTACTS</Typography>
            <br />
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
