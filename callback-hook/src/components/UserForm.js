import React, { useState } from 'react'
import UseInput from '../Hooks/UseInput'

const UserForm = () => {
    // const[firstName, setFirstName] = useState('')
    // const[lastName, setLastName] = useState('')

    const [firstName, setFirstName, resetFirstName] = UseInput('')
    const [lastName, setLasttName, resetLastName] = UseInput('')
    
    // const handleFirstName = (e) =>{
    //     setFirstName( e.target.value)
    // }
    // const handleLastName = (e) =>{
    //     setLastName(e.target.value)
    // }
    const submitHandler = (e) => {
        e.preventDefault();
        alert( `First name: ${firstName}, Last name: ${lastName}`);
        resetFirstName();
        resetLastName();
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First name</label>
                <input {...setFirstName} type='text' />
            </div>
            <div>
                <label>Last name</label>
                <input {...setLasttName} type='text' />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm