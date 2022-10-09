import React from 'react'
import { useEffect, useState } from 'react'
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  const datepickerRef = React.createRef();
  const options = {
    minDate:user.intime,
    disableMobile:false,
    enableTime: true,
    dateFormat: "d-m-Y  h-i K",
    position:" "
  };
  
  return (
    <form className='parking-inputfield'
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.vehiclenumber || !user.intime || !user.outtime||!user.ParkingSlot) return
        props.updateUser(user.id, user)
      }}
    >
      <div>
        <label>Name</label>
        <input
          type='text'
          onChange={handleInputChange}
          name='name'
          value={user.name}
        />
      </div>

      <div>
        <label>vehiclenumber</label>
        <input
          type='text'
          onChange={handleInputChange}
          name='vehiclenumber'
          value={user.vehiclenumber}
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
        <label>In time</label>
        <input
          type='text'
          name='intime'
        
          value={user.intime}
          disabled = "disabled"
        />
      </div>
      <div>
        <label>out time</label>
        <Flatpickr className="date-picker"
        placeholder="Select date"
        ref={datepickerRef}
        options={options}
        value={user.outtime}
        onChange={(date) => {
          setUser({ ...user, outtime: date.toLocaleString('en-US')})
        }}
      />
      </div>
      <div>
        <button>Update user</button>
        <button
          className='button muted-button'
          onClick={() => {
            props.setEditing(false)
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditUserForm
