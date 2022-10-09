import React from 'react';
import { useState } from 'react';
const AddUserForm = props => {
  let date = new Date();
  const initialFormState = {id: null,
    name: '',
    vehiclenumber: '',
    intime: date.toLocaleString('en-US'),
    outtime: '',
    ParkingSlot:''
  }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    console.log(event.target);
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
 
  return (
    <form
     className='parking-inputfield'
      onSubmit={event => {
        event.preventDefault()
        console.log(user);
        if (!user.name || !user.vehiclenumber ||!user.ParkingSlot)
          return
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <div>
        <label>Name</label>
        <input
          type='text'
          onChange={handleInputChange}
          name='name'
          value={user.name}
          placeholder="ex(Ramya)"
        />
      </div>

      <div>
        <label>vehiclenumber</label>
        <input
          type='text'
          onChange={handleInputChange}
          name='vehiclenumber'
          value={user.vehiclenumber}
          placeholder="ex(TN 90 V 9090))"
        />
      </div>
      <div>
        <label>Parking Slot</label>
        <input
          type='text'
          onChange={handleInputChange}
          name='ParkingSlot'
          value={user.ParkingSlot}
        />
      </div>
      <div>
      <label>In Time</label>
      <input
          type='text'
          onChange={handleInputChange}
          name='intime'
          value={user.intime}
          disabled = "disabled"
        />
      </div>
      <div>
        <label>out time</label>
        <input
          type='text'
          onChange={handleInputChange}
          name='outtime'
         
          value={user.outtime}
        />
       
      </div>
      <div>
        <button>Add new user</button>
      </div>
    </form>
   
  )
}

export default AddUserForm
