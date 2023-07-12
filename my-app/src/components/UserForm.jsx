import React, { useState } from 'react';
import './UserForm.css';

function UserForm({ onSaveUser, users }) {
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userImage,setUserImage]=useState('https://i.pravatar.cc/48?u=499476')

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName.trim() === '') {
      setErrorMessage('Please enter a value!');
      return;
    }

    const ımageID = crypto.randomUUID();

    const newUserData = {
      id: users.length + 1,
      userName,
      userImage: `${userImage}?=${ımageID}`,
    };

    onSaveUser(newUserData);
    setUserName('');
    setErrorMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <input
          type='text'
          onChange={handleChange}
          placeholder='Add a new customer'
          value={userName}
        />
        <button type='submit'>+</button>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
      </div>
    </form>
  );
}

export default UserForm;
