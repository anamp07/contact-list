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
            <button className='btn btn-primary mb-2' onClick={() => setDisplayForm(!displayForm)}>
                <i className={!displayForm ? 'bi bi-plus-circle-fill me-2' : 'bi bi-x-circle-fill me-2' }></i>
                {!displayForm ? 'Add new contact' : 'Close'}
            </button>
            {
                displayForm && <ContactForm dispatch={dispatch} />
            }
            <Table contacts={state} dispatch={dispatch} />
        </div>
    )
}

export default ContactList