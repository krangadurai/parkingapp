import { useState } from 'react'
import React from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'
import EditUserForm from './forms/EditUserForm'

function App () {
  const usersData = [
    {
      id: 1,
      name: 'Rangadurai',
      vehiclenumber: 'KA 06 v 7878',
      intime: '19-01-2022  12-00 AM',
      outtime: '20-01-2022  12-00 AM',
      ParkingSlot: 'G89'
    }
  ]

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    setEditing(false)
  }

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const initialFormState = {
    id: null,
    name: '',
    vehiclenumber: '',
    intime: '',
    outtime: '',
    ParkingSlot: ''
  }

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      vehiclenumber: user.vehiclenumber,
      intime: user.intime,
      outtime: user.outtime,
      ParkingSlot: user.ParkingSlot
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className='container'>
      <h4 className='text-green'>Parking Details</h4>
      <div className='border'>
        <div>
          {editing ? (
            <div>
              <h2 className='text-blue'>Edit </h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h5 className='text-blue'>Add</h5>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
      </div>
      <hr/>
      <br/>
      <div >
        <h5 className='text-brown'>View Details</h5>
        <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
      </div>
    </div>
  )
}

export default App
