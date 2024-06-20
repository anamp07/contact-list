import React, { useReducer, useEffect, useState } from 'react'
import { ContactsReducer } from '../reducers/ContactsReducer'
import Table from './Table'
import ContactForm from './ContactForm'

const init = () => {
    const contacts = localStorage.getItem('contacts')
    return contacts ? JSON.parse(contacts) : []
}

const ContactList = () => {
    const [state, dispatch] = useReducer(ContactsReducer, [], init)
    const [displayForm, setDisplayForm] = useState(false)
    
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(state))
    }, [state])

    return (
        <div className="container my-5">
            <button className='btn btn-primary' onClick={() => setDisplayForm(!displayForm)}>
                Add Contact
            </button>
            {
                displayForm && <ContactForm dispatch={dispatch} />
            }
            <Table contacts={state} dispatch={dispatch} />
        </div>
    )
}

export default ContactList