import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const ContactForm = ({dispatch}) => {

    const [data, setData] = useState({name: '', phone: ''})

    const {name, phone} = data

    const handleChange = (e) => {
        setData ({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const actionAdd = {
        type: 'add',
        payload: {
            id: uuid(),
            name,
            phone,
        }
    }

    const handleAdd = () => {
        dispatch(actionAdd)
    }

  return (
    <div className="container contact-form my-4">
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label" htmlFor="contactName">
                Name
            </label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="contactName" name="name" value={name} onChange={handleChange} required />
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label" htmlFor="contactPhone">
                Phone
            </label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="contactPhone" name="phone" value={phone} onChange={handleChange} required />
            </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button onClick={handleAdd} className="btn btn-success">Add contact</button>
            </div>
        </div>
    </div>
  )
}

export default ContactForm