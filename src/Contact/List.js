import { TextField, Typography } from '@mui/material';
import { useState } from 'react';


function List({ contacts }) {

    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase())
        );
    });

    return (
        <div>
            <TextField placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} sx={{display:'block', width:'100%'}} />
            <br />
            <ul className='list'>
                {
                    filtered.map((contact, index) => (
                        <li key={index}>
                            <Typography>{contact.fullName}</Typography>
                            <Typography>{contact.phoneNumber}</Typography>
                        </li>
                    ))
                }
            </ul>
            <br />
            <Typography variant='h6'>Total kayıt sayısı: {filtered.length}</Typography>
        </div>
    )
}

export default List
