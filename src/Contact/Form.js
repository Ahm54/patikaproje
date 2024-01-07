import { Stack, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

function Form({ addContact, contacts }) {

    const [form, setForm] = useState({ fullName: "", phoneNumber: "" });

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullName === "" || form.phoneNumber === "") {
            return false;
        }
        addContact([...contacts, form])
        setForm({ fullName: '', phoneNumber: '' })
    }

    return (
        <form>
            <Stack>
                <TextField
                    name='fullName'
                    placeholder='Full Name'
                    onChange={onChangeInput}
                    value={form.fullName} />
                <br />
                <TextField
                    name='phoneNumber'
                    placeholder='Phone Number'
                    type='number'
                    onChange={onChangeInput}
                    value={form.phoneNumber} />
                <br />
                <Button
                    variant='contained'
                    color='primary'
                    onClick={onSubmit}
                    sx={{ display: 'flex', padding: '10px', textAlign: 'center' }}
                >ADD</Button>
                <br />
            </Stack>
        </form>
    )
}

export default Form
