
import React from 'react'
const UserTable = (props)=>(
    <table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>vehicle Number</th>
        <th>Parking Slot</th>
        <th>In Time</th>
        <th>Out Time</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length>0?(
            props.users.map((user,i)=>(
                <tr key={user.id}>
                        <td>{i+1}</td>
                        <td>{user.name}</td>
                        <td>{user.vehiclenumber}</td>
                        <td>{user.ParkingSlot}</td>
                        <td>{user.intime}</td>
                        <td>{user.outtime}</td>
                        <td>
                        <button onClick={()=>{
                            props.editRow(user)
                        }} className="button muted-button">Edit</button>
                        <button onClick={()=>props.deleteUser(user.id)} className="button muted-button">Delete</button>
                        </td>
                    </tr>

            ))
            ):(
                <tr>
                    <td colSpan={7}>No users</td>
                </tr>
            )
            
            
        }
        <tr>
            <td colSpan={4}><h1>total</h1></td>
            <td colSpan={3}><h1>{props.users.length}</h1></td>
        </tr>
      
    </tbody>
  </table>
);

export default UserTable;