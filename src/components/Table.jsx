import React from 'react'

const Table = ({contacts = [], dispatch}) => {
    const handleDelete = (id) => {
        const deleteAction = {
           type: 'delete',
           payload: id 
        }

        dispatch(deleteAction)
    }
  return (
    <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                contacts.map((contact) => {

                    const contactId = contact.id.split("-")[0]
                    return (
                        <tr key={contact.id}>
                            <th scope="row">{contactId}</th>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(contact.id)}>
                                    <i class="bi bi-trash3-fill"></i>
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default Table